#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
npm install

# Run ts-node
npm start

echo "Process exited with code: $?"
echo
echo
