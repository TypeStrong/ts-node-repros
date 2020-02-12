import {sys, LanguageServiceHost, LanguageService, createLanguageService, createDocumentRegistry, CompilerOptions, ScriptSnapshot, getDefaultLibFilePath} from 'typescript';
import * as Path from 'path';
import * as fs from 'fs';
import * as ts from 'typescript';

// All 4 of these cases reproduce the bug: `Program` is never cached
doReproduction({includeBothFilesinScriptFileNames: false, addResolvedModulesToScriptFileNames: false, implementGetProjectVersion: false});
doReproduction({includeBothFilesinScriptFileNames: false, addResolvedModulesToScriptFileNames: true, implementGetProjectVersion: false});
doReproduction({includeBothFilesinScriptFileNames: true, addResolvedModulesToScriptFileNames: false, implementGetProjectVersion: false});
doReproduction({includeBothFilesinScriptFileNames: true, addResolvedModulesToScriptFileNames: true, implementGetProjectVersion: false});

// All 4 of these cases work correct because `getProjectVersion()` overrides `isProjectUpToDate()`
doReproduction({includeBothFilesinScriptFileNames: false, addResolvedModulesToScriptFileNames: false, implementGetProjectVersion: true});
doReproduction({includeBothFilesinScriptFileNames: false, addResolvedModulesToScriptFileNames: true, implementGetProjectVersion: true});
doReproduction({includeBothFilesinScriptFileNames: true, addResolvedModulesToScriptFileNames: false, implementGetProjectVersion: true});
doReproduction({includeBothFilesinScriptFileNames: true, addResolvedModulesToScriptFileNames: true, implementGetProjectVersion: true});

function doReproduction(args: {
    /**
     * If true, include both source files in the getScriptFileNames() array.
     * If false, include only root.ts
     */
    includeBothFilesinScriptFileNames: boolean;
    /**
     * If true, resolved modules are added to scriptFileNames
     */
    addResolvedModulesToScriptFileNames: boolean;
    /**
     * If true, host will implement `getProjectVersion()`
     */
    implementGetProjectVersion: boolean;
}) {
    ////////
    // Create a LanguageService pointed at the ./project directory
    ////////
    const projectName = 'project';
    const getCurrentDirectory = () => Path.resolve(__dirname, projectName);
    const options: CompilerOptions = {
        moduleResolution: ts.ModuleResolutionKind.NodeJs,
        types: []
    };
    const scriptFileNames = args.includeBothFilesinScriptFileNames
        ? [
            Path.resolve(__dirname, projectName, 'root.ts'),
            Path.resolve(__dirname, projectName, 'other.ts')
        ]
        : [
            Path.resolve(__dirname, projectName, 'root.ts')
        ];

    const moduleResolutionHost: ts.ModuleResolutionHost = {
        fileExists: sys.fileExists,
        readFile: sys.readFile,
        directoryExists: sys.directoryExists,
        getCurrentDirectory,
        getDirectories: sys.getDirectories,
        realpath: sys.realpath
    };
    const moduleResolutionCache: ts.ModuleResolutionCache = ts.createModuleResolutionCache(getCurrentDirectory(), s => Path.normalize(s), options);
    const host: LanguageServiceHost = {
        getProjectVersion: args.implementGetProjectVersion ? () => '1' : undefined,
        getCompilationSettings: () => options,
        getDefaultLibFileName: (options) => getDefaultLibFilePath(options),
        getCurrentDirectory,
        getScriptFileNames: () => scriptFileNames.slice(),
        getScriptSnapshot: (fileName: string) => {
            return ScriptSnapshot.fromString(fs.readFileSync(fileName, 'utf8'));
        },
        getScriptVersion: () => '1',
        getTypeRootsVersion: () => 1,
        directoryExists: sys.directoryExists,
        fileExists: sys.fileExists,
        getDirectories: sys.getDirectories,
        readDirectory: sys.readDirectory,
        readFile: sys.readFile,
        realpath: sys.realpath,
        resolveModuleNames(moduleNames: string[], containingFile: string, reusedNames: string[] | undefined, redirectedReference: ts.ResolvedProjectReference | undefined, options: CompilerOptions): (ts.ResolvedModule | undefined)[] {
            return moduleNames.map(moduleName => {
                const {resolvedModule} = ts.resolveModuleName(moduleName, containingFile, options, moduleResolutionHost, moduleResolutionCache, redirectedReference);
                if(resolvedModule && args.addResolvedModulesToScriptFileNames && !scriptFileNames.includes(resolvedModule.resolvedFileName)) {
                    scriptFileNames.push(resolvedModule.resolvedFileName);
                }
                return resolvedModule;
            });
        }
    };
    const documentRegistry = createDocumentRegistry(true, getCurrentDirectory());
    const languageService = createLanguageService(host, documentRegistry);
    const emitOutput = scriptFileNames.map(fileName => languageService.getEmitOutput(fileName));
    const diagnostics = scriptFileNames.map(fileName => languageService.getSemanticDiagnostics(fileName));

    ///////
    // All 3 should be the same, because nothing ever changes, so `Program` should never be recreated.
    // However, this reproduction shows that sometimes the `Program` is *always* being recreated.
    ///////
    const program1 = languageService.getProgram();
    const program2 = languageService.getProgram();
    const program3 = languageService.getProgram();

    console.dir({
        args,
        'program1 === program2': program1 === program2,
        'program2 === program3': program2 === program3,
        'host.getScriptFileNames()': host.getScriptFileNames(),
        'program3.getSourceFiles()': program3?.getSourceFiles().map(v => v.fileName)
    });
}
