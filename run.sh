#!/usr/bin/env bash

# Install a specific version of node
n 20

# Install package.json dependencies
yarn

# Run ts-node
yarn node  --experimental-loader ts-node/esm ./example.ts

echo "Process exited with code: $?"
echo
echo
