#!/usr/bin/env bash
set -x

# Run with `yarn exec ./run.sh` or equivalent

ts-node ./src/index.ts
nyc --cache false ts-node --project ./tsconfig.json ./src/index.ts
nyc --cache false ts-node --project ./tsconfig.prefertsexts.json ./src/index.ts
