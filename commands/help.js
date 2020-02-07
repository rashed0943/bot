const Discord = module.require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
  var command = args[0];
  var commandnum = 0;
  
  if (command) {
        try {
          var file = require(`./${command}`);
        } catch(error) {
          message.channel.send("That command does not exist, Take a look at /help").then(msg => msg.delete(2300));
          console.error(error);
        }
              
        let newembed = new Discord.RichEmbed()
          .setAuthor(`Help - ${file.help.type} Command`, message.guild.iconURL)
          .setColor("RANDOM")
          .setImage(client.AvatarURL)
          .setFooter(`Bot created by @シгครђєͣ๔ͫت#3457 • ${commandnum} Commands`,"https://media.discordapp.net/attachments/596716658857345026/648346591555616779/image0.jpg")
          .addField(file.help.usage, file.help.description)
        
        message.channel.send(newembed);  
  }

  var done = false
  
  var General = [];
  var Moderation = [];
  var Fun = [];
  var Utility= [];
  
  fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    commandnum = files.length;
    
    files.forEach(file => {
      let f = require(`./${file}`);
      var namelist = f.help.name;
      var desclist = f.help.description;
      var usage = f.help.usage;
      var type = f.help.type;
      
      if (type == "General") General.push([namelist, desclist, usage]);
      if (type == "Moderation") Moderation.push([namelist, desclist, usage]);
      if (type == "Fun") Fun.push([namelist, desclist, usage]);
      if (type == "Utility") Utility.push([namelist, desclist, usage]);

      if (namelist == "userinfo") {
        done = true
      }      
    });
    
    if (done) {
      if (!command) {
        var embed = new Discord.RichEmbed()
          .setAuthor("Help", message.guild.iconURL)
          .setColor("RANDOM")
.setImage("https://media.discordapp.net/attachments/545627330996076554/655762994982027275/line-1.gif")
          .setImage(client.AvatarURL)
          .setFooter(`Bot created by @シгครђєͣ๔ͫ ت#3457 • ${commandnum} Commands`, "https://images-ext-1.discordapp.net/external/SIPUmB5mck5-xFX4FIZL4nm-ERXvlbpPDgiEKcnIYcA/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/488153050951843860/521f7db33d615dab0ab5312a7de00a64.png")               
          .addField("⚙️General⚙️", General.map((roles => roles[0])).join(", ") , true)
          .addField("👮Moderation👮", Moderation.map((roles => roles[0])).join(", ") , true)
          .addField("😂Fun😂", Fun.map((roles => roles[0])).join(", ") , true)
          .addField("🔧Utility⏲", Utility.map((roles => roles[0])).join(", ") , true)
          .addField("❓Command Information❓", "/help <command>") 
  .setThumbnail("https://cdn.discordapp.com/attachments/596716658857345026/621814099466256384/ljk.gif")
 .setImage("https://cdn.discordapp.com/attachments/549225667267395596/572811777738276866/rainbow.gif")
        message.channel.send(embed)
        message.react("648381026040807444")
      }
    }
  });
}

module.exports.help = {
    name: "help",
    description: "Displays all the commands available",
    usage: "help",
    type: "General" 
}