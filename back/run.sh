#!/usr/bin/env bash

# Install a specific version of node
n 17.6.0

# Install package.json dependencies
npm install

# Run ts-node
node server.js

echo "Process exited with code: $?"
echo
echo
