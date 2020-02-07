const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {if ((message.author.id !== "488153050951843860" && message.author.id !== "509370361620594708"))

  return;

  var Devembed = new Discord.RichEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL)
.setThumbnail("https://media.discordapp.net/attachments/596716658857345026/652709962606444554/image0.gif")
      .setColor("RANDOM")
      .addField("whitlist Help ", "( ͡° ͜ʖ ͡°)")
      .addField("Being Worked on......", "..");

    message.channel.send(Devembed);
  message.react("648381026040807444")
}

module.exports.help = {
  name: "",
  description: "A dev commands help",
  usage: "for devs only"
};
