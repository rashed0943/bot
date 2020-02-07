const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {if ((message.author.id !== "488153050951843860" && message.author.id !== "407186243202318365")) 
  message.stop();

message.delete();
    var Devembed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
.setThumbnail("https://media.discordapp.net/attachments/596716658857345026/638341059017179147/image0.gif")
    .setColor("3498db")
   .addField("Developer Help ","( ͡° ͜ʖ ͡°)")
.addField("Working Commands", "/nou, /new, /uptime, /info /devban, /devsay, /devprune <number>")

            message.channel.send(Devembed);  
  }    
module.exports.help = {
    name:"",
    description: "A dev commands help",
    usage: "for devs only"
}            