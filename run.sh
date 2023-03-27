#!/usr/bin/env bash

# Install a specific version of node.  Skip this to use whatever version you
# already have installed.
n lts

# Install package.json dependencies
npm install

# Check version numbers
npx ts-node -vvv

# Run ts-node
npx ts-node ./example.ts

echo "Process exited with code: $?"
echo
echo
