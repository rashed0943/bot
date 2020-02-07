const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    var embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("3498db")
   .addField("Creator Profile Picture","( ͡° ͜ʖ ͡°)")
.setThumbnail("https://images-ext-2.discordapp.net/external/WTOFr3mqKtuznSA12ihQsOc3356MY3obKGDewm2yURM/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/488153050951843860/1166c426e9d17fdca90b21a4983d6fbb.png")
.addField("want to add the creator?","Here's my username (シгครђєͣ๔ͫ ت#3457)                           If you add me \(//∇//)\)")
    
    


    
            message.channel.send(embed);  
  }                

                         
                 console.log("oof")
 module.exports.help = {
    name: "creator",
    description: "Who created the bot!",
    usage: "see how made the bot!",
    type: "General"
}
