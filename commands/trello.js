
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("Trello site","***https://trello.com/b/40EEorXV/rasheds-bot***")
    .setColor("RANDOM")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    

    message.channel.send(botembed);
}

module.exports.help = {
    name: "trello",
    description: "See the trello site!",
    usage: "/Trello",
    type: "General" 
}