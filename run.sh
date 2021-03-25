#!/usr/bin/env bash
set -x

# Install a specific version of node
n 12.16.1

git clone https://github.com/cdr/code-server.git
cd code-server
git checkout main
# git checkout jsjoeio/ts-node-repro
yarn

# Run with old version
yarn watch &
job="$!"
sleep 20
kill -9 "$job"

# Run with 9.0.0 (explicit)
yarn add -D ts-node@9.0.0
yarn watch &
job="$!"
sleep 20
kill -9 "$job"

# Run with 9.1.0
yarn add -D ts-node@9.1.0
yarn watch
job="$!"
sleep 20
kill -9 "$job"

# Run with 9.1.1
yarn add -D ts-node@9.1.1
yarn watch
job="$!"
sleep 20
kill -9 "$job"

echo "Process exited with code: $?"
echo
echo
