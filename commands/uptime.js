const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
     
  let e = new Discord.RichEmbed()
  .setColor("#2bff72")
  .setTitle("Up time Information about this bot")
  .addField("Response Time:", `Average: ${bot.ping}\n${bot.pings}⏱`, true)
  .addField("Amount of connections:", `Guilds: ${bot.guilds.size}🏘\nChannels: ${bot.channels.size}\nVoice Channels: ${bot.voiceConnections.size}\nCashed Users: ${bot.users.size}🏠`, true)
  .addField("Code Info", "Language: JavaScript\nMain Dependencies: Discord.JS / Express📜", true)
  .setFooter(`${bot.user.username} || a bot made by シгครђєͣ๔ͫ ت#3457`, bot.user.displayAvatarURL);

  message.channel.send(e)
  console.log(Object.keys(bot.guilds).length)
}
  
module.exports.help = {
    name: "uptime",
    description: "see how long thr bot was on!",
    usage: "uptime",
    type: "General" 
}