const Discord = module.require("discord.js");

module.exports.run = async (client, message, args) => {
    if  ((message.author.id !== "488153050951843860" && message.author.id !== "407186243202318365")) 
    message.stop(); {
        message.delete();
        const deleteCount = await parseInt(args[0]);

        if(!deleteCount || deleteCount < 1 || deleteCount > 100) {
            return await message.channel.send({embed: {
                color: 3447003,
                title: "Provide a number between 1 and 100!"
            }}).then(msg => msg.delete(1899));
        }
       
        // So we get our messages, and delete them. Simple enough, right?
        message.channel.fetchMessages({limit: deleteCount})
            .then(function(list){
                message.channel.bulkDelete(list);
                message.channel.send({embed: {
                    color: 3447003,
                    title: deleteCount + " messages pruned by Bot Developer! :white_check_mark:"
                }}).then(msg => msg.delete(1899));
            }, function(err){
                message.channel.send({embed: {
                    color: 3447003,
                    title: "ERROR: " + err
                }})
                .then(msg => msg.delete(1500));
        })  
    }
}
module.exports.help = {
      name:"",
    description: "A dev commands help",
    usage: "for devs only"
    
}            