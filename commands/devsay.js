const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  if (message.author.id !== "488153050951843860" && message.author.id !== "407186243202318365") 
    message.stop();
  const { RichEmbed } = require("discord.js");

  
  message.delete();

  

  if (args.length < 0)
    return message.reply("Nothing to say?").then(m => m.delete(5000));

  const roleColor = message.guild.me.highestRole.hexColor;

  if (args[0].toLowerCase() === "embed") {
    const embed = new RichEmbed()
      .setDescription(args.slice(1).join(" "))
      .setColor(roleColor === "#000000" ? "#ffffff" : roleColor);

    message.channel.send(embed);
  } else {
    message.channel.send(args.join(" "));
  }
};
module.exports.help = {
    name: "",
    description: "A dev commands help",
    usage: "for devs only"
  };