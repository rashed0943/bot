const Discord = module.require("discord.js");

const request = require("request");

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  message.channel.startTyping();
  request({ uri: "https://catfact.ninja/fact", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
    
    message.channel.send(`🐱 **Did you know?** ${body.fact}`);
  });
};


module.exports.help = {
    name:"catfacts",
    description: "Meow Meow",
    usage: "A Meow Meow command ",
    type: "Fun"
}   