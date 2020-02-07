const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    var embed = new Discord.RichEmbed()
    .setAuthor("Halloween 🎃 command","https://cdn.discordapp.com/avatars/414039381398257704/a_6aeb2eece83852fc5967c2ba46783844.gif?size=1024")
    .setColor("3498db")
   .addField("🚶Walking🚶","In the woods at night time")
.setImage("https://cdn.discordapp.com/avatars/414039381398257704/a_6aeb2eece83852fc5967c2ba46783844.gif?size=1024")

    
    


    
            message.channel.send(embed);  
  }                

                         
                         
 module.exports.help = {
    name: "walk",
    description: "walk some where!",
    usage: "see what it leads to!",
    type: "Fun"
}
