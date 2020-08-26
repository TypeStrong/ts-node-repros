// If you NOT comment 'withTsNode()' in server js, this file will be requred.

// If you hit enters, 'fileLine' will not change

// But if add some code to line above 'new Error()', line number will increment to 1,
// no matter how many blank lines there are.
var stack = new Error().stack;
var fileLine = stack.match(/[^\r\n]+/g)[1]
console.log(fileLine); 