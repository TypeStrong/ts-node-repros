import {foo} from './foo.cjs';

async function main() {
    const {bar} = await import('./bar.mjs');

    console.log('---');
    console.log(foo);
    console.log(bar);
    console.log('---');
}
main();
