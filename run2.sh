#!/usr/bin/env bash

# Install a specific version of node
n 16

# Install package.json dependencies
yarn

# Run ts-node with entrypoint
yarn ts-node ./example.ts

# Run ts-node REPL
echo $'\n' | yarn ts-node -i

echo "Process exited with code: $?"
echo
echo
