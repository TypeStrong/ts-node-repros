#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
npm install

# Run ts-node
npx ts-node ./example.ts

echo "Process exited with code: $?"
echo
echo
