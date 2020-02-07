const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    if ((message.author.id !== "488153050951843860" && message.author.id !== "407186243202318365")) 
message.stop();
message.delete();{
        const member = await message.mentions.members.first() || message.guild.members.get(args[0]);

        if(member) {
          let role = message.guild.roles.find("name", "NOOB IS Muted");
          
          if (!member.roles.has(role.id)) {
            return message.channel.send("This user is not muted!")
          }
          
          await member.removeRole(role);
          message.channel.send(member + " has been Unmuted!🙂");
          
        } else {
          await message.channel.send("Specify a valid user!");
        }
    }
}
module.exports.help = {
      name:"",
    description: "A dev commands help",
    usage: "for devs only"
  }
