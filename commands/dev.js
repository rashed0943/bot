const Discord = module.require("discord.js");


module.exports.run = async (client, message, args) => {if ((message.author.id !== "488153050951843860" && message.author.id !== "407186243202318365"))
  message.stop();
  message.delete();
    var embed = new Discord.RichEmbed()
    .setAuthor("⚙Head Developer Announcement ⚙", "https://cdn.discordapp.com/attachments/596716658857345026/621453697511063573/giphy.gif")
    .setColor("#000000")

   .addField("⚠Dev Announcement⚠", "To all servers who have this bot 🤖. We're encountering difficulties with the host editing and updates will be postponed until it's fixed.  — From lead developer of @Rashed0943#0224™")
.setThumbnail("https://media.discordapp.net/attachments/596716658857345026/637394515430211605/image0.gif")
    
          
    
    message.channel.send(embed);  
                                      console.log("oof")                }
module.exports.help = {
      name:"",
    description: "A dev commands help",
    usage: "for devs only"
    
}            