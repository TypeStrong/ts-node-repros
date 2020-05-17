#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
npm install

echo 'COMPILING SRC-BUG-NOT-OCCURRING'
./node_modules/.bin/tsc --project ./src-bug-not-occurring
echo 'COMPILING SRC-BUG-OCCURRING'
./node_modules/.bin/tsc --project ./src-bug-occurring

echo "Process exited with code: $?"
echo
echo
