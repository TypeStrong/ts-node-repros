import { Client, Intents } from 'discord.js';

const bot = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES
    ],
});

bot.on('ready', () => {
    console.log('This bot is logged in')
});

//this is a discord Token only used for reproduction purposes so its save that I include it
bot.login('OTYxMjgwNjI0MjEwMTA4NDM2.Yk2sWA.TMjqygtarq6WWnW2Pous42NK1DI')