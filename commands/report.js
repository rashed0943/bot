
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Couldn't find user that you wanted to report.😭");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
  .setAuthor("⚠Report Log⚠", "https://media.discordapp.net/attachments/596716658857345026/635949584887316510/image0.gif")
    .setColor("#15f153")
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", rreason);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel, make a reports channel so i could send it!");


    message.delete().catch(O_o=>{});
  let done = new Discord.RichEmbed()
    .setAuthor("✅Done✅", "https://media.discordapp.net/attachments/596716658857345026/636164293460623391/image0.png")
  .addField("Report Sent","You're report was sent to the staff!")
    .setColor("#000000")

    reportschannel.send(reportEmbed);
message.channel.send(done);
}
module.exports.help = {
    name: "Report",
    description: "A report command!",
    usage: "to report the dumb noobs!",
    type: "General"
}
