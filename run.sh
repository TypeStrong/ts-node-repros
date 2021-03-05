#!/usr/bin/env bash

# Install a specific version of node
n 15

# Install package.json dependencies
yarn

# Run ts-node
yarn mocha

echo "Process exited with code: $?"
echo
echo
