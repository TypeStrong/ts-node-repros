# Unhelpful Error When Using `noEmitHelpers: true`

TL;DR: If you use `noEmitHelpers: true`, and try to use `ts-node` to run a script with no imports or exports which requires a `tslib` function, it will complain it can't be found. Neither installing `tslib` nor using `importHelpers: true` will save you, even though they both seem like they should.

More detail in the bug report:
