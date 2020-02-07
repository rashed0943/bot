const Discord = module.require("discord.js");
const urban = module.require("urban");

module.exports.run = async (client, message, args) => {
  let str = args.join("");
  
  if (args.length > 0) {
    urban(str).first(json => {
      if (!json) return message.channel.send("No results found!")
      
      let embed = new Discord.RichEmbed()
        .setTitle(json.word)
        .setColor("3498db")
        .setDescription(json.definition || "No definition!")
        .addField("Upvotes", json.thumbs_up, true)
        .addField("Downvotes", json.thumbs_down, true)
        .setFooter("Source: Urban Dictionary, Author: " + json.author);
      
      message.channel.send(embed=embed);
    });
  } else {
    await message.channel.send("Enter a word!").then(msg => msg.delete(2300));
  }
}

module.exports.help = {
    name: "urban",
    description: "Gets the definiton of a word or sentence",
    usage: "urban <word> or <sentence>",
    type: "Utility"
}