#!/usr/bin/env bash

n lts

# Install dependencies
npm install

# Create package
npm pack

cd other-project
# Install the package
npm install ../*.tgz

echo "Process exited with code: $?"
echo
echo
