#!/usr/bin/env bash

# Install package.json dependencies
yarn

# Compile
yarn tsc --project ./tsconfig-node12.json
yarn tsc --project ./tsconfig-nodenext.json

# Run
node ./dist-node12/example.js
node ./dist-nodenext/example.js

echo "Process exited with code: $?"
echo
echo
