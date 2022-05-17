const old = require.extensions['.ts'];
require.extensions['.ts'] = function(mod: any, filename) {
    const _compile = mod._compile;
    mod._compile = function (code, fileName) {
        code =
            'if(false) { console.log("uncovered branch"); }\n' +
            code;
        return _compile.call(this, code, fileName);
    }
    return old(mod, filename);
}
require('./underTest.ts');