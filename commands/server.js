const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    var embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("3498db")
   .addField("Want to join the support server?","( ͡° ͜ʖ ͡°)")
.addField("https://discord.gg/j8rfQWX","There you go!")
    .addField("What is this server about?","Rashed0943 Support Server is a Server that helps people with the bot named <@576566681380454421>! ")
    


    
            message.channel.send(embed);  
  }                

module.exports.help = {
    name: "server",
    description: "Gives the invite link totge support server!",
    usage: "server",
    type: "General"  
}