#!/usr/bin/env bash

# Install a specific version of node
nvm install 20.10.0

# Install package.json dependencies
pnpm install

# Run ts-node
pnpm ts-node ./src/index.js

echo "Process exited with code: $?"
echo
echo
