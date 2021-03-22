#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

# Run ts-node REPL interactively
(
    sleep 5
    echo 'const foo: Foo = "foo";'
    sleep 5
    echo 'const bar: Bar = "bar";'
    sleep 5
    echo 'baz'
    sleep 5
    echo 'this should cause a syntax error'
    sleep 5
    echo 'const thisShouldCauseATypeError: Foo = baz;'
    sleep 5
) | \
yarn ts-node --interactive -e "import {Foo, Bar, baz} from './example';"

echo "Process exited with code: $?"
echo
echo
