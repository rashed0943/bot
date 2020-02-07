const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  message.author.send("https://discordapp.com/api/oauth2/authorize?client_id=576566681380454421&permissions=8&scope=bot");

var embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("3498db")
   .addField("Creator Profile Picture","( ͡° ͜ʖ ͡°)")
.setThumbnail("https://media.discordapp.net/attachments/596716658857345026/618941457763401728/image0.png")
.addField("want to add the creator?","Here's my username (シгครђєͣ๔ͫ ت#3457)                           If you add me \(//∇//)\)")
    
    


    
            message.channel.send(embed);
  var embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("3498db")
   .addField("Want to join the support server?","( ͡° ͜ʖ ͡°)")
.addField("https://discord.gg/j8rfQWX","There you go!")
    .addField("What is this server about?","Rashed0943 Support Server is a Server that helps people with the bot named <@576566681380454421>! ")
    


    
            message.channel.send(embed);  
  var embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("3498db")
   .addField("Sent to dm","Look in you're dm's")
.setThumbnail("https://media.discordapp.net/attachments/596716658857345026/625394270152556544/image0.gif")

    


    
            message.channel.send(embed);    
}
module.exports.help = {
    name: "botinvite",
    description: "Sends you the bot invite for Rashed0943",
    usage: "botinvite",
    type: "General"  
}