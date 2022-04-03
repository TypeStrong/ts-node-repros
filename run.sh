#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
npm install

# Run tests with ts-node
npm test

echo "Process exited with code: $?"
echo
echo
