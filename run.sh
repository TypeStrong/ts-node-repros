#!/usr/bin/env bash

# Run on Node 18
sudo n lts
yarn
yarn ts-node -vv
yarn node --experimental-loader ts-node/esm ./example.ts

# Run on Node 20
sudo n 20
yarn
yarn ts-node -vv
yarn node --experimental-loader ts-node/esm ./example.ts

echo "Process exited with code: $?"
echo
echo
