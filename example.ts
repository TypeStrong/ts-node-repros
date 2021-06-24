
console.log('Some .ts code reproducing a bug');
declare const require: any;

// When this file is added to `getScriptFileNames`, `getProjectVersion` is not
// incremented.
// Therefore, when ts-node tries to get the transpiled output of this file,
// TypeScript erroneously uses the old `Program` instance where this file is considered
// "external" and therefore is not emitted.
import './src/node_modules/causes-problem';

require('./src/no-problem');
