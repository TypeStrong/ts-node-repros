#!/usr/bin/env bash

# Install a specific version of node
n v20.11.0

# Install package.json dependencies
npm ci

# Run tsc
npm run tsc

# Run ts-node
npm run ts-node

echo "Process exited with code: $?"
echo
echo
