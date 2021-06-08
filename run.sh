#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

# Run ts-node
echo '
  const a: types.EitherOr<string, number> = Math.random() > 0.5 ? "hello world" : 123;
  const b: types.EitherOr<string, number> = {thisShouldBe: "a type error"};
' | yarn ts-node ./example.ts

echo "Process exited with code: $?"
echo
echo
