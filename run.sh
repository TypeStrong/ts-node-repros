#!/usr/bin/env bash
set -x

# Install a specific version of node
#n lts

for branch in 'TypeStrong/ts-node#master' 'TypeStrong/ts-node#ab/realpath-and-emit-node_modules-files' 'ts-node@v7.0.1' 'ts-node@v8.10.1' ; do
# Install package.json dependencies
rm -r node_modules || true
rm package-lock.json || true
npm install
rm package-lock.json || true
npm install "$branch"

# Run ts-node
time ./node_modules/.bin/tsc --project .
{
echo "$branch"
time ./node_modules/.bin/ts-node ./run.ts
time ./node_modules/.bin/ts-node --files ./run.ts
time ./node_modules/.bin/ts-node --transpile-only ./run.ts
time ./node_modules/.bin/ts-node --files --transpile-only ./run.ts
} >> "benches.txt" 2>&1

done

cat "benches.txt"

echo "Process exited with code: $?"
echo
echo
