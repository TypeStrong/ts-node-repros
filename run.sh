#!/usr/bin/env bash

# Install package.json dependencies
npm install

# Run ts-node
./node_modules/.bin/ts-node --compiler-options '{"strict":true}' ./example.ts

echo "Process exited with code: $?"
echo
echo
