#!/usr/bin/env bash
set -x

# Install a specific version of node
n 14.16.0

# Install package.json dependencies
npm install

# Log version numbers
./node_modules/.bin/ts-node -vv

# Run ts-node
./node_modules/.bin/ts-node ./src/example.ts

echo "Process exited with code: $?"
echo
echo
