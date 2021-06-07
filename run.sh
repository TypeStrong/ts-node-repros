#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
npm i

# Run ts-node
npm run ts-node

echo "Process exited with code: $?"
echo
echo
