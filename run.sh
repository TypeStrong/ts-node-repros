#!/usr/bin/env bash

# Install a specific version of node
n 18.6.0

# Install package.json dependencies
npm install

# Run ts-node
ts-node ./example.ts

echo "Process exited with code: $?"
echo
echo
