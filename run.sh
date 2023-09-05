#!/usr/bin/env bash

# Install a specific version of node
n v20

# Install package.json dependencies
yarn

# Run ts-node
node --loader ts-node/esm/transpile-only ./example.ts

echo "Process exited with code: $?"
echo
echo
