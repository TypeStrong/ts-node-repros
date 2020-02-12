#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

set -x
node --version
yarn --version
yarn tsc --version

# Run ts-node
yarn ts-node ./example.ts

echo "Process exited with code: $?"
echo
echo
