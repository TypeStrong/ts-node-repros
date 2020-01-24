#!/usr/bin/env bash
set -euo pipefail

apt-get install git -y
git clone https://github.com/cspotcode/typegoose
cd typegoose
git checkout repro-ts-node-898
yarn
yarn exec ./node_modules/.bin/mocha "./test/index.test.ts"
