declare const require: any;

function foo() {
    const a = require('../outside-of-rootdir/foo');
    const {other}: {other: string} = require('./other');
}