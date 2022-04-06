# steps to reproduce
your output may vary depending on your username or if your using another shell but the overall output should be the same

- run `npm i`
- run `npm run bot:dev`
    - this should work fine without any problems
    - output:
    ```bash
    snoweuph@SnoweuphDesktop:/media/data/workspace/Projects/ts-node-repros$ npm run bot:dev

    > bot:dev
    > ts-node ./bot.ts

    This bot is logged in
    ```
- run `npm run shard:dev`
    this should trough the error
    ```bash
    /media/data/workspace/Projects/ts-node-repros/bot.ts:1
    import { Client, Intents } from 'discord.js';
    ^^^^^^

    SyntaxError: Cannot use import statement outside a module
    ```
- run `tsc`
- open the ./build/bot.js and replace the path to the bot file
    - replace `'./bot.ts'`
    - with `'./build/bot.js'`
- run `npm run bot:prod`
    - this hould work fine
    - output:
    ```bash
    snoweuph@SnoweuphDesktop:/media/data/workspace/Projects/ts-node-repros$ npm run bot:prod

    > bot:prod
    > node ./build/bot.js

    This bot is logged in
    ```
- run `npm run shard:prod`
    - this hould work fine
    - output:
    ```bash
    snoweuph@SnoweuphDesktop:/media/data/workspace/Projects/ts-node-repros$ npm run shard:prod

    > shard:prod
    > node ./build/sharded.js

    Launched shard 0
    This bot is logged in
    ```