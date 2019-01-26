This repo reproduces the performance issues raised in https://github.com/TypeStrong/ts-node/issues/754.

`npm test` executes a test run using the same pattern as in a real project of mine. On my machine, loading just three test files takes c. 1,350 ms. This figure seems to scale at least linearly with the number of test files loaded, and possibly in proportion to the total number of modules `import`ed.

`npm run demo` narrows the issue down to the use of `require` for each test file. This is basically how the Alsatian test framework works, and, given that other users have reported the issue with more popular frameworks, I presume it is a standard pattern.