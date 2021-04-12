#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
npm install
npm install -g ts-node

# Run ts-node
ts-node ./src/index.ts
npm run start

echo "Process exited with code: $?"
echo
echo
