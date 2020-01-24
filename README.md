# ts-node reproductions

If you find a bug in ts-node and file an issue, it's helpful -- even necessary -- to create a minimal reproduction of the bug.

One way to do that is opening a pull-request on this repository with your reproduction.  Github Actions will execute `./run.sh`.

You can put anything you want here: add/remove dependencies in `package.json`, change the commands in `run.sh`, change the code in `./example.ts`,
or add a hundred more `.ts` files.

Once your pull request is submitted here, link to it in your ts-node bug report.

