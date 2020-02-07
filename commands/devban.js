const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    if ((message.author.id !== "488153050951843860" && message.author.id !== "407186243202318365")) 
    message.stop();{
        let mentioned = await message.mentions.members.first();
        let reason = await args.slice(1).join(' ');

        message.delete();
        if (!mentioned)
            return await message.channel.send({embed: {
                color: 3447003,
                title: "Mention a valid member to IPban them!"
            }}).then(msg => msg.delete(2000));
        if (!mentioned.bannable)
            return await message.channel.send({embed: {
                color: 3447003,
                title: "You cannot Ipban this member!"
            }}).then(msg => msg.delete(2000));    
        if (!reason)
            reason = "No reason provided!";
        
        mentioned.ban(reason);
        await message.channel.send({embed: {
            color: 15158332,
          thumbnail: {
            link: 'https://cdn.discordapp.com/attachments/596716658857345026/622189182009344000/banned.gif',
	},
            title: "Big noob " + mentioned.displayName + " has been got the dev ipBanned! :scream:"
          
        }});    
      
    }
}
module.exports.help = {
      name:"",
    description: "A dev commands help",
    usage: "for devs only"
}            