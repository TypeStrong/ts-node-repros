#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

mkdir node_modules/foo/
echo 'import * as React from "react"; export default <div />;' > node_modules/foo/bar.tsx

# Run ts-node
yarn ts-node ./example.ts

echo "Process exited with code: $?"
echo
echo
