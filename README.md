# ts-node debugging in VSCode

## Using Chrome / Edge DevTools

Open edge://inspect or chrome://inspect in browser.

```
node --inspect-brk=127.0.0.1:9229 -r ts-no
de/register ./src/index.ts
# Might need 0.0.0.0 to deal with WSL2 networking; I'm not sure
```

## VSCode

Use the launch config in `.vscode/launch.json`.

Set a breakpoint at the very top of your entrypoint file.  For some reason this is necessary to hit the first breakpoints in imported files.

