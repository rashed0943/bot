const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  var embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("3498db")
    .addField(
      "***About me***",
      "Hello person who use this command, I am the owner of this bot! (シгครђєͣ๔ͫ ت#3457 )                                                                         I am 17 as of right now in 2019 Am living in the USA :flag_us:                                                         This Bot was made for to test my skills and enhance them even more!                                           ***Well that's good enough information, see ya!***                                                                                  ~~**シгครђєͣ๔ͫ3457#ت Signing out**~~"
    )
    
    .setThumbnail(
      "https://media.discordapp.net/attachments/596716658857345026/629279680314212362/image0.gif"
    );

  message.channel.send(embed);
};

module.exports.help = {
  name: "info",
  description: "info about me!",
  usage: "info",
  type: "General"
};
