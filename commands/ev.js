
const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
  if (message.author.id === "488153050951843860") {
    let output;
    let error = false;
    let silentMode = false;
    let input = args.join(" ");
    if (message.content.endsWith("--s")) {
      silentMode = true
      input = input.slice(0, -4);
    }
    try {
      output = eval(input)
    } catch (e) {
      if (e) output = e;
      error = true;
    }

    if (silentMode == false) message.channel.send(new Discord.RichEmbed().setTitle("Eval").addBlankField().addField("Input", "```js\n" + input + "\n```", true).addField("Output", "```js\n" + output + "\n```", true).setColor(Math.floor(Math.random() * 16777215)));
    else {
      if (!error) {
        console.log(output);
        message.delete();
      }
    }
  }
}



module.exports.help = {
  name: "",
  description: "owner command",
  usage: "owner only command"
};

