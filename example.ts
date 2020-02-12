import {sys, LanguageServiceHost, LanguageService, createLanguageService, createDocumentRegistry, CompilerOptions, ScriptSnapshot, getDefaultLibFilePath} from 'typescript';
import * as Path from 'path';
import * as fs from 'fs';
import ts = require('typescript');

doReproduction({includeBothFilesinScriptFileNames: false});
doReproduction({includeBothFilesinScriptFileNames: true});

function doReproduction(args: {
    /**
     * If true, include both source files in the getScriptFileNames() array.
     * If false, include only root.ts
     */
    includeBothFilesinScriptFileNames: boolean
}) {
    ////////
    // Create a LanguageService pointed at the ./project directory
    ////////
    const projectName = 'project';
    const getCurrentDirectory = () => Path.resolve(__dirname, projectName);
    const options: CompilerOptions = {
        moduleResolution: ts.ModuleResolutionKind.NodeJs,
        types: [],
        noLib: true,
        lib: []
    };
    const scriptFileNames = args.includeBothFilesinScriptFileNames
        ? [
            Path.resolve(__dirname, projectName, 'root.ts'),
            Path.resolve(__dirname, projectName, 'other.ts')
        ]
        : [
            Path.resolve(__dirname, projectName, 'root.ts')
        ];

    const host: LanguageServiceHost = {
        getCompilationSettings: () => options,
        getDefaultLibFileName: () => getDefaultLibFilePath(options),
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
        'program2 === program3': program2 === program3
    });
}
