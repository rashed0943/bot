const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)

    message.channel.send(botembed);
      
  var embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("3498db")
   .addField("Creator Profile Picture","( ͡° ͜ʖ ͡°)")
.setThumbnail("https://media.discordapp.net/attachments/596716658857345026/618941457763401728/image0.png")
.addField("want to add the creator?","Here's my username (シгครђєͣ๔ͫ ت#3457)                           If you add me \(//∇//)\)")
    
    


    
            message.channel.send(embed);  
}

module.exports.help = {
    name: "botinfo",
    description: "bot info!",
    usage: "botinfo",
    type: "General"
}
