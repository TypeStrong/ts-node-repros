#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

# Run ts-node
yarn workspace workspace-a start
yarn workspace workspace-a start:throng

echo "Process exited with code: $?"
echo
echo
