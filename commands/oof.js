const Discord = module.require("discord.js");


module.exports.run = async (client, message, args) => {if ((message.author.id !== "488153050951843860" && message.author.id !== "509370361620594708"))
  message.stop();
  message.delete();
    var embed = new Discord.RichEmbed()
    .setAuthor("OOF", "https://media.discordapp.net/attachments/596716658857345026/637090246743556096/image0.gif")
    .setColor("#000000")

   .addField("OOF COMMANDS USED", "user has used the oof oof command")
.setThumbnail("https://media.discordapp.net/attachments/596716658857345026/637090246743556096/image0.gif")
    
          
    
    message.channel.send(embed);  
                                                      }
module.exports.help = {
      name:"",
    description: "oof",
    usage: "for only the luck one"
    
}   