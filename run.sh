#!/usr/bin/env bash

set +e
set -x

mkdir -p ~/.n
export N_PREFIX="$PWD/.n"

# Install a specific version of node
n 12

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
