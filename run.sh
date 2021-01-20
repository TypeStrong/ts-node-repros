#!/usr/bin/env bash
set -x

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

# Run via esm: it is broken; logs `undefined`.  `foo.js` does not wait for `bar.js` to load asynchronously
node -r esm ./src/foo.js

# Run via native esm; it works; logs `this is bar`.  `foo.js` waits for `bar.js` to load synchronously
cp package.nativeesm.json package.json
node ./src/foo.js

echo "Process exited with code: $?"
echo
echo
