"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const foo_cjs_1 = require("./foo.cjs");
async function main() {
    const { bar } = await import('./bar.mjs');
    console.log('---');
    console.log(foo_cjs_1.foo);
    console.log(bar);
    console.log('---');
}
main();
