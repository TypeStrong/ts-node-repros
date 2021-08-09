#!/usr/bin/env bash

set +e
set -x

mkdir -p ~/.n
export N_PREFIX="$PWD/.n"
export PATH="$PWD/.n/bin:$PATH"

function doTest() {
  node --version
  npm --version
  npx --version
  echo 'console.log(123)' | npx ts-node
}

# Test with node 12
n 12
doTest

# Test with node 14
n lts
doTest

# Test with node 16
n 16
doTest

# Test with node 12, but latest npm & npx
n 12
npm install -g npm@latest
doTest

# Test with node 14, but latest npm & npx
n lts
npm install -g npm@latest
doTest

# Test with node 16, but ensure latest npm & npx (should be identical to prior node 16 test since it already ships with npm 7)
n 16
npm install -g npm@latest
doTest

echo "Process exited with code: $?"
echo
echo
