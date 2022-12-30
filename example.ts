console.log('You have to use the ts-node REPL to see the bug!');
console.log("Invoke the ts-node REPL, then enter the following commands:");
console.log(`
let a = 3
3 + 4
.type a
3 + 4
`);
console.log("The first addition is correct, the second is not.");
