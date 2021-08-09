#!/usr/bin/env bash

# Install a specific version of node
n 12

# Install package.json dependencies

# Run ts-node
echo 'console.log(123)' | npx ts-node

echo "Process exited with code: $?"
echo
echo
