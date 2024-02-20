const repl = require("repl");

const foo = "bar";

const replServer = repl.start();

replServer.context.foo = foo;
