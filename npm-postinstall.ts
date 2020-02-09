//@ts-nocheck
console.dir({
    'process.cwd()': process.cwd(),
    __filename,
    __dirname,
    module,
    [`require.resolve('./x')`]: require.resolve('./x')
});
import * as x from './x';
console.log('hello2', typeof x);