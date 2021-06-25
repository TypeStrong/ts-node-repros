#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

# Run ts-node (multiple time to have a chance of catching the random crash)
for n in {1..10000} ; do yarn ts-node ./example.ts || code=$? && break ; done ; sh -c "exit $code"

echo "Process exited with code: $?"
echo
echo
