
const Discord = module.require("discord.js");


module.exports.run = async (client, message, args) => {
 
  const emojiList = message.guild.emojis.map((e, x) => (x + ' = ' + e) + ' | ' +e.name).join('\n');
   message.channel.send(emojiList);

message.react("648381026040807444")
  

}
module.exports.help = {
    name: "listemojis",
    description: "Gets all emojis in the server",
    usage: "listemojis",
    type: "Utility"
}