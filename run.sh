#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

# Run ts-node
yarn run test

echo "Process exited with code: $?"
echo
echo
