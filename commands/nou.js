const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    var embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("3498db")
   .addField("***NO U***","NO YOU NOOB... go commit Scooter ankle 🛴")

.setThumbnail("https://media.discordapp.net/attachments/625071468346081344/626185020046049280/unknown.gif")
 
    message.channel.send(embed); 

  }                

                         
                         
 module.exports.help = {
    name: "nou",
    description: "no u noob!",
    usage: "nou",
    type: "Fun"
}
