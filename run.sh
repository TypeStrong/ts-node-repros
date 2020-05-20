#!/usr/bin/env bash
set -x

# Install a specific version of node
n lts

mkdir benches

for branch in master ab/realpath-and-emit-node_modules-files v7.0.1 v8.10.1 ; do
# Install package.json dependencies
rm -r node_modules || true
npm install
npm install "TypeStrong/ts-node#$branch"

# Run ts-node
time ./node_modules/.bin/tsc --project .
{
echo "$branch"
time ./node_modules/.bin/ts-node ./run.ts
time ./node_modules/.bin/ts-node --files ./run.ts
time ./node_modules/.bin/ts-node --transpile-only ./run.ts
time ./node_modules/.bin/ts-node --files --transpile-only ./run.ts
} 2>&1 > "benches/$branch.txt"

done

for bench in benches/*; do
cat "$bench"
done

echo "Process exited with code: $?"
echo
echo
