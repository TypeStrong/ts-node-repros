// Example of a require hook that further modifies files.
// The output of this require hook should be captured by NYC.
// This means the coverage report should refer to line numbers 100+
// If the bug exists, then the coverage report for preferTsExts will show line
// numbers *less than* 100.

const old = require.extensions['.ts'];
require.extensions['.ts'] = function(mod: any, filename) {
    const _compile = mod._compile;
    mod._compile = function (code, fileName) {
        code = code.replace(/\/\/# sourceMappingURL=.*$/, '');
        code = '\n'.repeat(100) + code;
        return _compile.call(this, code, fileName);
    }
    return old(mod, filename);
}
require('./underTest.ts');