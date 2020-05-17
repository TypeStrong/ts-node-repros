# Reproduction of TypeScript issue #38611

https://github.com/microsoft/TypeScript/issues/38611

To reproduce:

```
npm install
./node_modules/.bin/tsc --project ./src-bug-not-occurring # Compiles fine
./node_modules/.bin/tsc --project ./src-bug-occurring # Throws semantic error
```

Both projects are identical except for a single line which triggers the bug.  It has a type annotation: `typeof import('../outside-of-rootdir/foo')`

When this annotation is added, `require()` expressions elsewhere in the file throw errors if they try to `require()` something outside of `rootDir`
