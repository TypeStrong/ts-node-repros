#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

yarn ts-node --project tsconfig.nocomments.json ./example.ts

echo "Process exited with code: $?"
echo
echo

yarn ts-node -p tsconfig.nocomments.json ./example.ts

echo "Process exited with code: $?"
echo
echo

yarn ts-node --project tsconfig.json ./example.ts

echo "Process exited with code: $?"
echo
echo

yarn ts-node -p tsconfig.json ./example.ts

echo "Process exited with code: $?"
echo
echo
