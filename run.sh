#!/usr/bin/env bash

git submodule update --init

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

cd node-ts-error
npm install
./node_modules/.bin/tsc

echo "Process exited with code: $?"
echo
echo
