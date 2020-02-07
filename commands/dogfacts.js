const request = require("request");

exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  message.channel.startTyping();
  request({ uri: "https://dog-api.kinduff.com/api/facts", json: true }, (error, response, body) => {
    if (error) throw new Error(error);
    message.channel.stopTyping();
    message.channel.send(`🐶 **Did you know?** ${body.facts[0]}`);
  });
};

module.exports.help = {
    name:"dogfacts",
    description: "Woof Woof",
    usage: "A Woof Woof command ",
    type: "Fun"
}   