#!/usr/bin/env bash
set -x

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

# Run ts-node
time ./node_modules/.bin/tsc --project .
time ./node_modules/.bin/ts-node ./run.ts
time ./node_modules/.bin/ts-node --files ./run.ts
time ./node_modules/.bin/ts-node --transpile-only ./run.ts
time ./node_modules/.bin/ts-node --files --transpile-only ./run.ts

echo "Process exited with code: $?"
echo
echo
