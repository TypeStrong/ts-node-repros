#!/usr/bin/env bash
set -x

# Install a specific version of node
#n lts

for branch in \
'TypeStrong/ts-node#master' \
'TypeStrong/ts-node#ab/realpath-and-emit-node_modules-files' \
'ts-node@7.0.0' \
'ts-node@7.0.1' \
'ts-node@8.0.0' \
'ts-node@8.0.1' \
'ts-node@8.0.2' \
'ts-node@8.0.3' \
'ts-node@8.1.0' \
'ts-node@8.1.1' \
'ts-node@8.2.0' \
'ts-node@8.3.0' \
'ts-node@8.4.0' \
'ts-node@8.4.1' \
'ts-node@8.5.0' \
'ts-node@8.5.2' \
'ts-node@8.5.3' \
'ts-node@8.5.4' \
'ts-node@8.6.0' \
'ts-node@8.6.1' \
'ts-node@8.6.2' \
'ts-node@8.7.0' \
'ts-node@8.8.0' \
'ts-node@8.8.1' \
'ts-node@8.8.2' \
'ts-node@8.9.0' \
'ts-node@8.9.1' \
'ts-node@8.10.0' \
'ts-node@8.10.1'
do
    # Install package.json dependencies
    rm -r node_modules || true
    rm package-lock.json || true
    npm install
    rm package-lock.json || true
    npm install "$branch"

    # Run ts-node
    time ./node_modules/.bin/tsc --project .
    {
        echo "Branch: $branch"
        export TS_NODE_CACHE=false
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
