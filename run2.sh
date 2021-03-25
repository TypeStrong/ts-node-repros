#!/usr/bin/env bash
set -x

# Install a specific version of node
n 12.16.1

git clone https://github.com/code-asher/ts-node-repro
cd ts-node-repro

yarn

# Doesn't work (on v12).
yarn ts-node index.ts
code=$?

# Should work.
yarn add ts-node@9.0.0
yarn ts-node index.ts

exit $code
