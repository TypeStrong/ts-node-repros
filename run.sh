#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

# Run tsc
yarn tsc || true

echo '-=-=-=-=-=-=-=-=-=-'

# Get extra module resolution info
yarn tsc --traceResolution || true

echo "Process exited with code: $?"
echo
echo
