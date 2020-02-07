const Discord = require("discord.js");
const snekfetch = require("snekfetch");

module.exports.run = async (bot, message, args) => {
 if ((message.author.id !== "488153050951843860" && message.author.id !== "407186243202318365")) 
    return message.channel.send ("You're not a dev")
  console.log("oof ean devlog")
}

module.exports.help = {
    name:"",
    description: "A dev commands help",
    usage: "for devs only"
}            