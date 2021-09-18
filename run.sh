#!/usr/bin/env bash

# Install a specific version of node
n 16
node --version
npm --version

# Run ts-node
npx node --loader ts-node/esm ./example.ts

echo "Process exited with code: $?"
echo
echo
