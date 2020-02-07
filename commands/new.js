const Discord = module.require("discord.js");


module.exports.run = async (client, message, args) => {message.delete();
    var embed = new Discord.RichEmbed()
    .setAuthor("New Update", "https://cdn.discordapp.com/attachments/596716658857345026/621453697511063573/giphy.gif")
    .setColor("#000000")

   .addField("Devs Note #22🔨", "New command /trello that links to a website to see what I am doing on the bot! :)")
  
message.channel.send(embed);  
                                                      }
                                             

module.exports.help = {
    name: "new",
    description: "new updates on the bot",
    usage: "updates <message>",
    type: "General" 
}