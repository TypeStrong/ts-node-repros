#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

# Works
TS_NODE_SCOPE=true yarn ts-node b/index.ts --project b/tsconfig.json

# Fails with "Emit skipped" error
yarn ts-node b/index.ts --project b/tsconfig.json --scope

echo "Process exited with code: $?"
echo
echo
