#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

# Run
yarn tsc --traceResolution
yarn ts-node ./src/index.ts

echo "Process exited with code: $?"
echo
echo
