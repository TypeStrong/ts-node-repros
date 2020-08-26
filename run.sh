#!/usr/bin/env bash

# Install a specific version of node
# n lts

# Install package.json dependencies
npm install

cat test/test.template1 > test/test.ts

# Start mocha in watch mode
./node_modules/.bin/mocha \
    --watch \
    --require ts-node/register \
    --reporter nyan \
    --watch-files 'test/**' \
    'test/**/*.tsx' 'test/**/*.ts' &
npmPid=$!

echo 'Waiting 5 seconds...'
sleep 5

# Modify test file to introduce TS error
echo 'Introducing a TS error...'
cat test/test.template2 > test/test.ts

echo 'Waiting 5 seconds...'
sleep 5

# Undo the change
echo 'Fixing the TS error...'
cat test/test.template3 > test/test.ts

echo 'Waiting 5 seconds...'
sleep 5

kill $npmPid

echo "Process exited with code: $?"
echo
echo
