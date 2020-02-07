const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
  if (Array.isArray(args) && args.length) {
    const feedbackChannel = client.guilds.get("596716658857345024").channels.get("634959835758067752");
    const feedbackEmbed = new Discord.RichEmbed()
      .setAuthor("rashed0943 Feedback", client.user.displayAvatarURL())
      .setColor("RANDOM")
      .setThumbnail(message.author.displayAvatarURL())
      .setTimestamp()
      .addField("👥 Author:", message.author.tag)
      .addField("👪 Server:", message.guild.name)
      .addField("💬 Message:", args.join(" "));
    feedbackChannel.send(feedbackEmbed);
    message.reply("your feedback has been sent!");
  } else {
    message.reply("you need to provide some feedback to send!");
  }
};

module.exports.help = {
    name:"Feedback",
    description: "give some feedback to me ",
    usage: " /feedback ",
    type: "General"
}   