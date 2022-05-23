#!/usr/bin/env bash

# Install a specific version of node
n lts

yarn

TS_NODE_DEBUG=true \
yarn test

echo "Process exited with code: $?"
echo
echo
