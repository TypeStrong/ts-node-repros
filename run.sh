#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

set -x
# Run tsc
echo '-=-=-=-=- Test 1 =-=-=-=-=-'
yarn tsc --project tsconfig-with-baseurl-no-paths.json || true
echo '-=-=-=-=- Test 2 =-=-=-=-=-'
yarn tsc --project tsconfig-with-baseurl-and-paths-1.json || true
echo '-=-=-=-=- Test 3 =-=-=-=-=-'
yarn tsc --project tsconfig-with-baseurl-and-paths-2.json || true
echo '-=-=-=-=-=-=-=-=-=-'

echo "Process exited with code: $?"
echo
echo
