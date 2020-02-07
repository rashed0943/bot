const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
if (message.member.hasPermission("MANAGE_CHANNELS"))
message.delete();
  
            
  client.on("messageDelete", async msg => {
    let logs = await msg.guild.fetchAuditLogs({ type: 72 });
    let entry = logs.entries.first();

    let embed = new Discord.RichEmbed()
      .setTitle("")
    .setAuthor("DELETED MESSAGE","https://media.discordapp.net/attachments/596716658857345026/636524177058430976/image0.png")
      .setColor("RANDOM")
      .addField("Author", msg.author.tag, true)
      .addField("Channel", msg.channel, true)
      .addField("Message", msg.content)
      .addField("Executor", entry.executor)
      .addField("Reason", entry.reason || "Heh no reason at all")
    .setThumbnail("https://media.discordapp.net/attachments/596716658857345026/636361140976222238/image0.gif")
      .setFooter(`Message ID: ${msg.id} | Author ID: ${msg.author.id}`);
let oof = message.guild.channels.find(`name`, "logs");
    if(!oof) var  e = new Discord.RichEmbed()
    .setAuthor("⚙Make a channel called logs ⚙", "https://media.discordapp.net/attachments/596716658857345026/635949584887316510/image0.gif")
    .setColor("RANDOM")
.addField("If you don't know how to make a private channel or a channel.","https://youtu.be/0FQSfUFseGc")
    .addField("what things you need to do!", "As soon you get the create logs channel, you don't need to run the command again unless the bot gets updated then it will stop")

          
msg.channel.sendEmbed(e).catch(err => console.log(err));
  
  
                            
    let channel = msg.guild.channels.find(x => x.name === "logs");
    channel.send({ embed });
  });
};
module.exports.help = {
    name: "logs",
    description: "logs deleted messages but you must create a channel called logs before using this command",
    usage: "logs",
    type: "Moderation"
}