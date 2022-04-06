import discord, { Shard } from 'discord.js';


const manager = new discord.ShardingManager('./bot.ts', {//this is the path to the bot.ts file it needs to be manually changed in the builded version
    token: 'OTYxMjgwNjI0MjEwMTA4NDM2.Yk2sWA.TMjqygtarq6WWnW2Pous42NK1DI',//this is a discord Token only used for reproduction purposes so its save that I include it
});

manager.on('shardCreate', (shard: Shard) => {
    console.log(`Launched shard ${shard.id}`);
})

manager.spawn();