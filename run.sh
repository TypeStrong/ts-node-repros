#!/usr/bin/env bash

# Install a specific version of node
n 12

set +e
set -x

node --version
npm --version
npx --version
echo 'console.log(123)' | npx ts-node

n lts
node --version
npm --version
npx --version
echo 'console.log(123)' | npx ts-node

echo "Process exited with code: $?"
echo
echo
