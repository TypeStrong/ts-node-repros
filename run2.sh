#!/usr/bin/env bash
set -x

# Install a specific version of node
n 12.16.1

git clone https://github.com/code-asher/ts-node-repro/blob/master/index.ts
cd ts-node-repro

yarn
yarn ts-node index.ts

yarn add ts-node@9.0.0
yarn ts-node index.ts

echo "Process exited with code: $?"
echo
echo
