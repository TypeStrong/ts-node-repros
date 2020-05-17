declare const require: any;

// Bug occurs when an import() is in the file
// This line is the only difference between src-bug-occurring and src-bug-not-occurring
const a: typeof import('./other') = null as any

function foo() {
    const a = require('../outside-of-rootdir/foo'); // Semantic error: File ... is not under 'rootDir' ...
    const {other}: {other: string} = require('./other'); // No error here, even though is semantically invalid.
    
    // It appears as though the resolver is trying to locate the targets of require() calls, but the typechecker does not care.
}