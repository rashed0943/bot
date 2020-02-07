
const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    var embed = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .setColor("3498db")
   .addField("***Bro!***","Did you just seriously talk during independent read time! ")

.setThumbnail("https://media.discordapp.net/attachments/596716658857345026/637478334179049523/image0.gif")
 .setImage("https://media.discordapp.net/attachments/624348488901328908/637400056726683679/image0.jpg")
.setFooter("|| a bot made by シгครђєͣ๔ͫ ت#3457","https://images-ext-2.discordapp.net/external/WcMHFrHg04DkyZzOSHacot8CUjcKiBPmgflcaUN6Rrw/%3Fsize%3D2048/https/cdn.discordapp.com/avatars/623679463481278464/b228a126ce30795efe10115a4fa3b63d.png")  
    message.channel.send(embed); 

  }                

                         
                         
 module.exports.help = {
    name: "talk",
    description: "BRO did you just....",
    usage: "talk",
    type: "Fun"
}
