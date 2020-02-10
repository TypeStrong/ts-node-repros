#!/usr/bin/env bash

curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n && bash n 12
node --version
cd node_modules/my-project

yarn
yarn tsc --project .
ls -al
echo "Process exited with code: $?"
echo
echo
