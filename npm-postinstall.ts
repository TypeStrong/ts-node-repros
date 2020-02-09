//@ts-nocheck
console.dir({
    'process.cwd()': process.cwd(),
    __filename,
    __dirname,
    module,
});
import * as x from './x';
console.log('hello2', typeof x);