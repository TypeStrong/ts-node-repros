Proving that it works.

Run the following on Windows:

```
yarn
ts-node -vv
node --experimental-specifier-resolution=node --loader ts-node/esm.mjs ./src/cli.ts
```

Here is the output on my machine:
```
C:\Users\cspotcode\Documents\dev\ts-node-repros>yarn
yarn install v1.22.4
warning package.json: No license field
warning No license field
[1/4] Resolving packages...
success Already up-to-date.
Done in 0.14s.

C:\Users\cspotcode\Documents\dev\ts-node-repros>ts-node -vv
ts-node v8.10.2
node v14.0.0
compiler v3.9.7

C:\Users\cspotcode\Documents\dev\ts-node-repros>node --experimental-specifier-resolution=node --loader ts-node/esm.mjs ./src/cli.ts
(node:11028) ExperimentalWarning: --experimental-loader is an experimental feature. This feature could change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
it works

C:\Users\cspotcode\Documents\dev\ts-node-repros>
```