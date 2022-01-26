# tsc path mapping tests

Companion to https://github.com/TypeStrong/ts-node/pull/1585

Below is my interpretation of the 3 tests.

# All 3 tests

All 3 tests show that:
* tsc is using the `@types/node` `"fs"` declarations and ignoring `./nested/fs.ts`.
  - because we get an error about `thisComesFromOurFsTsFile` but not `readFile`

# Test 1

This test shows that:
* `"*": ["*"]` mapping is implied when config has no paths
  - because we do not get an error for `import 'root-file'`

# Test 2

This test shows 2 things:
* there is **no** implied `"*": ["*"]` mapping.
  - because we get an error about `import 'root-file'`

# Test 3

This test shows that:
* When path mapping does not have an `*` pattern, there is an implied `"*": ["*"]` mapping.
  - because we do not get an error for `import 'root-file'`
