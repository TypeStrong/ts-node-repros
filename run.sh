#!/usr/bin/env bash

# Install a specific version of node
n 16
node --version
npm --version

# Run ts-node
npx ts-node ./example.ts

echo "Process exited with code: $?"
echo
echo
