# Unhelpful Error When Using `noEmitHelpers: true`

TL;DR: If you use `noEmitHelpers: true`, and try to use `ts-node` to run a script with no imports or exports which requires a `tslib` function, it will complain it can't be found. Neither installing `tslib` nor using `importHelpers: true` will save you, even though they both seem like they should. Instead, you get this error:

```
/Users/Katie/Documents/Sentry/forks/ts-node-repros/example.ts:1
for (const num of [1, 2, 3]) {
                  ^
ReferenceError: __values is not defined
    at Object.<anonymous> (/Users/Katie/Documents/Sentry/forks/ts-node-repros/example.ts:1:19)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Module.m._compile (/Users/Katie/Documents/Sentry/forks/ts-node-repros/node_modules/ts-node/src/index.ts:1455:23)
    at Module._extensions..js (node:internal/modules/cjs/loader:1155:10)
    at Object.require.extensions.<computed> [as .ts] (/Users/Katie/Documents/Sentry/forks/ts-node-repros/node_modules/ts-node/src/index.ts:1458:12)
    at Module.load (node:internal/modules/cjs/loader:981:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at phase4 (/Users/Katie/Documents/Sentry/forks/ts-node-repros/node_modules/ts-node/src/bin.ts:567:12)
    at bootstrap (/Users/Katie/Documents/Sentry/forks/ts-node-repros/node_modules/ts-node/src/bin.ts:85:10)
error Command failed with exit code 1.
```

More detail in the bug report: https://github.com/TypeStrong/ts-node/issues/1691.
