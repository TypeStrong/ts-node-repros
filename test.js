const preferTsExts = process.argv[2] === 'true';
console.log(`with preferTsExts set to ${preferTsExts}`);

const jsExt = require.extensions['.js'];
require.extensions['.ts'] = jsExt;

if(preferTsExts) {
  delete require.extensions['.js'];
  require.extensions['.js'] = jsExt;
}

console.log('require("foo")');
require('foo');
console.log('require("./foo")');
require('./foo');
