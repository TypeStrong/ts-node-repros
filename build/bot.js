"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const bot = new discord_js_1.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MEMBERS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.DIRECT_MESSAGES
    ],
});
bot.on('ready', () => {
    console.log('This bot is logged in');
});
//this is a discord Token only used for reproduction purposes so its save that I include it
bot.login('OTYxMjgwNjI0MjEwMTA4NDM2.Yk2sWA.TMjqygtarq6WWnW2Pous42NK1DI');
