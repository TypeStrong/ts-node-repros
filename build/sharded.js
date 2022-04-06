"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const manager = new discord_js_1.default.ShardingManager('./build/bot.js', {// this is the manualy changed path
    token: 'OTYxMjgwNjI0MjEwMTA4NDM2.Yk2sWA.TMjqygtarq6WWnW2Pous42NK1DI', //this is a discord Token only used for reproduction purposes so its save that I include it
});
manager.on('shardCreate', (shard) => {
    console.log(`Launched shard ${shard.id}`);
});
manager.spawn();
