#!/usr/bin/env bash

curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n && bash n 12.13.0
yarn
node -r ts-node/register/transpile-only  -r tsconfig-paths/register src/server.ts
