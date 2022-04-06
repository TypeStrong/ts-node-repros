#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

# Run ts-node
npm run bot:dev
npm run shard:dev
# build it
tsc
echo "I dont know how to replace the path in one of the builded files, more info in Readme"
# run builded version
npm run bot:prod
npm run shard:prod

echo "Process exited with code: $?"
echo
echo
