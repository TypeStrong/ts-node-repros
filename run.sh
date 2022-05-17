#!/usr/bin/env bash
set -x

ts-node ./src/index.ts
nyc ts-node ./src/index.ts
nyc ts-node --project ./tsconfig2.json ./src/index.ts

# nyc node


# load module
#     calls TS-node hook
#         ts-node hook has been wrapped by nyc
#         nyc wraps module._compile
#         then ts-node wraps around that
#         module._compile = (
#             js = tsTransform(ts)
#             module._compile(js)
#         )
#         calls nyc hook
#             module._compile = (
#                 instrumentedJs = instrument(js)
#                 module._compile() <-- calling into ts-node hook, which is not what we want.  We want other way around
