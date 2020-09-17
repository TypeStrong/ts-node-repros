#!/usr/bin/env bash

# Install a specific version of node
n 14.0.0

npm install -g typescript@4.0.2
npm install -g ts-node@9.0.0

# Run ts-node
ts-node ./src/index.ts

echo "Process exited with code: $?"
echo
echo
