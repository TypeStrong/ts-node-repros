const fs = require('fs');
const Path = require('path');

// console.time('create files');
// for(let i = 0; i < 1000; i++) {
//     fs.writeFileSync(`src/${i}.ts`, 'const a = 1; export {a};');
//     // fs.writeFileSync(`dist/${i}.js`, 'const a = 1; module.exports.a = a;');
// }
// console.timeEnd('create files');

for(const dir of ['src', 'dist']) {
    console.time(`start ${dir}`);
    fs.readdirSync(Path.join(__dirname, dir)).forEach((v: string) => {
        console.time(v);
        require(`./${ dir }/` + v);
        console.timeEnd(v);
    });
    console.timeEnd(`start ${dir}`);
}