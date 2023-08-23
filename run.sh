#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

# Run ts-node
yarn ts-node --project ./tsconfig.json ./example.ts

echo "Process exited with code: $?"
echo
echo
