#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

# Run ts-node
yarn ts-node --transpileOnly ./example.ts
##           ^ without this flag, it will work as expected

echo "Process exited with code: $?"
echo
echo
