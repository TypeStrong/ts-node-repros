// If you comment 'withTsNode()' in server js, this file will be requred.

// No matter what you do, stack will be correct.

var stack = new Error().stack;
var fileLine = stack.match(/[^\r\n]+/g)[1]
console.log(fileLine); 