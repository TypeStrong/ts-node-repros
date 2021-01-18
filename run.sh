#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

# Run ts-node
./node_modules/.bin/ts-node -vv
node --experimental-specifier-resolution=node --loader ts-node/esm ./src/index.ts

echo "Process exited with code: $?"
echo
echo
