#!/usr/bin/env bash

# Install a specific version of node
n v18.19.0

# Install package.json dependencies
yarn

# Run ts-node
node --loader ts-node/esm/transpile-only ./example.ts

echo "Process exited with code: $?"
echo
echo
