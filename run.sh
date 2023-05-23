#!/usr/bin/env bash

# Install a specific version of node
sudo n 20

# Install package.json dependencies
yarn

yarn ts-node -vv

# Run ts-node
yarn node --experimental-loader ts-node/esm ./example.ts

echo "Process exited with code: $?"
echo
echo
