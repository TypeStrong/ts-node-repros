# ts-node reproductions

If you find a bug in ts-node and file an issue, it's helpful -- even necessary -- to create a minimal reproduction of the bug.

This link explains why we ask for a minimal reproduction.  Thank you in advance!  
https://gist.github.com/Rich-Harris/88c5fc2ac6dc941b22e7996af05d70ff

One way to do that is opening a pull-request on this repository with your reproduction.  Github Actions will execute `./run.sh`.

You can put anything you want here: add/remove dependencies in `package.json`, change the commands in `run.sh`, change the code in `./example.ts`,
or add a hundred more `.ts` files.

Once your pull request is submitted here, link to it in your ts-node bug report.
