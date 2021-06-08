#!/usr/bin/env bash

# Install package.json dependencies
npm install

# Run ts-node
echo '
  const a: types.EitherOr<string, number> = Math.random() > 0.5 ? "hello world" : 123;
  const b: types.EitherOr<string, number> = {thisShouldBe: "a type error"};
' | ./node_modules/.bin/ts-node ./example.ts

echo "Process exited with code: $?"
echo
echo
