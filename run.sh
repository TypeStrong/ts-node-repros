#!/usr/bin/env bash
set -x

# Install a specific version of node
n 12.16.1

npm install -g npm-run-all gulp

# install jq
# mkdir bin
# curl https://github.com/stedolan/jq/releases/download/jq-1.6/jq-linux64 > bin/jq
# chmod +x bin/jq
export PATH="$PATH:$PWD/bin"
# quick test to be sure it worked
echo '{"foo": 1}' | jq .foo

git clone https://github.com/cdr/code-server.git
cd code-server
# git checkout main
git checkout jsjoeio/ts-node-repro
yarn

waittime=60

# Run with old version
yarn watch &
job="$!"
sleep "$waittime"
kill -9 "$job"

# Run with 9.0.0 (explicit)
yarn add -D ts-node@9.0.0
yarn watch &
job="$!"
sleep "$waittime"
kill -9 "$job"

# Run with 9.1.0
yarn add -D ts-node@9.1.0
yarn watch
job="$!"
sleep "$waittime"
kill -9 "$job"

# Run with 9.1.1
yarn add -D ts-node@9.1.1
yarn watch
job="$!"
sleep "$waittime"
kill -9 "$job"

echo "Process exited with code: $?"
echo
echo

