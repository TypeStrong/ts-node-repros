#!/usr/bin/env bash
set -x

# Install a specific version of node
sudo n 12.16.1

git clone https://github.com/code-asher/ts-node-repro
cd ts-node-repro

npm install

# Doesn't work (on v12).
npm install TypeStrong/ts-node#main
yarn ts-node -vv
yarn ts-node index.ts
code=$?

npm install ts-node@latest
yarn ts-node -vv
yarn ts-node index.ts

# Should work.
npm install ts-node@9.0.0
yarn ts-node -vv
yarn ts-node index.ts

exit $code
