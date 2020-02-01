#!/usr/bin/env bash

n 12.13.0
yarn
node -r ts-node/register/transpile-only  -r tsconfig-paths/register src/server.ts
