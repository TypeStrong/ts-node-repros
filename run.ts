const fs = require('fs');
const Path = require('path');
const util = require('util');

// console.time('create files');
// for(let i = 0; i < 1000; i++) {
//     fs.writeFileSync(`src/${i}.ts`, 'const a = 1; export {a};');
//     // fs.writeFileSync(`dist/${i}.js`, 'const a = 1; module.exports.a = a;');
// }
// console.timeEnd('create files');

for(const [dir, ext] of [
    ['src', '.ts'],
    ['dist', '.js']
]) {
    console.time(`start ${dir}`);
    const durations: number[] = [];
    fs.readdirSync(Path.join(__dirname, dir)).forEach((v: string) => {
        // console.time(v);
        const before = Date.now();
        require(`./${ dir }/${ v }`);
        const duration = Date.now() - before;
        durations.push(duration);
        // console.timeEnd(v);
    });
    console.timeEnd(`start ${dir}`);
    console.log(util.inspect(durations, {maxArrayLength: null}));
}
