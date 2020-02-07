const Discord = require("discord.js");
exports.run = async(client, message, args) => {
var fortunes = [
"🅰 + 🅱 + 🇨= 🔤",
  "Getting oof chan",
  "OwO",
  "Fun fact 11# if you say Ok boommer, you win every argument!",
  "Wait is this thing on?",
  "L",
  "type /server to join our rashed server! ;)"
  
  ]; 
    /* Defining from & to*/
    let from = args.slice(0, 1).join(" ");
    let to = args.slice(1, 2).join(" ");

    /* Defining the EMOJIS [list of the number emojis: 0-9 & 0-9 gif] (contact XkijuX#6667 to get them ;)*/
    let animated = "🃏";
    let array = [ "0", "1","2","3","4","5","6","7","8","9"]

    /* Embed Formatting */
    const help = new Discord.RichEmbed()
        .setColor("#ffb72f")
        .addField("Sassocket number generator 101 :robot:", "\n**Format**: \n```https\n/random <from*> [to*]``` \n**<>** = Optional\n**[]** = Needed\n** * ** = A number between **0** and **9999**")
        .setFooter(" © rashed0943™", client.user.avatarURL)
        .setTimestamp();

    const start = new Discord.RichEmbed()
        .setColor("#ffb72f")
        .addField("Getting The Number 🎲", fortunes[Math.floor(Math.random()*fortunes.length)])

        .setFooter(" © rashed0943™", client.user.avatarURL)
        .setTimestamp();



    /* Checking different values for info */
    if(from === "help") return message.channel.send(help);
    if(!from && !to) return message.channel.send(help);
    if (!to) {
        to = from;
        from = 1;
    }
    if(from >= 9999 || from < 0) return message.channel.send("Please use the right format 😊", {embed : help});
    if(to > 9999 || to <= 0)  return message.channel.send("Please use the right format 😊", {embed : help});

    /* Validating */
    if (!from) return message.channel.send(format);
    if (!/^[0-9]*$/.exec(to + from)) return message.channel.send("Please use the right format 😊", {embed : help});
    if (to - from <= 0) return message.channel.send("Please make sure that ``from`` **Isent** higher than ``to``", {embed : help});

    /* Sending the First Message*/
    const msg = await message.channel.send(start);

    /* Message Countdown */
    for(var i = 5; i > 0; i--) {
        await sleep(1000);
        await msg.edit(i)
        if(i == 1) {
          await sleep(1000);
          await msg.edit("GETTING NUMBER:");
        }
    }

   /* Formatting the answer */
    let number = await NumberPicker(from, to).toString();
    let NumberArray = [];
    switch (number.toString().length) {
        case 0:
               NumberArray = [0, 0, 0, 0];
          break;
        case 1:
              NumberArray = [0, 0 , 0, number];
          break;
        case 2:
              NumberArray = [0, 0 , number.slice(0,1), number.slice(1,2)];
          break;
        case 3:
              NumberArray = [0, number.slice(0,1), number.slice(1,2), number.slice(2,3)];
          break;
        case 4:
              NumberArray = [number.slice(0,1), number.slice(1,2), number.slice(2,3), number.slice(3,4)];
        break;
  }
  for(var i = 0; i < 4; i++) {
    const start = new Discord.RichEmbed()
        .setColor("#ffb72f")
        .setFooter(" ©rashed0943™", client.user.avatarURL)
        .setTimestamp();
    switch (i) {
      case 0:
            start.addField("Getting The Number 🎲", animated + animated + animated + array[NumberArray[3]]);
        break;
      case 1:
          start.addField("Getting The Number 🎲",  animated + animated + array[NumberArray[2]] + array[NumberArray[3]]);
        break;
      case 2:
          start.addField("Getting The Number 🎲", animated + array[NumberArray[1]] + array[NumberArray[2]] + array[NumberArray[3]]);
        break;
      case 3:
          start.addField("Your NUMBER is 🎲", array[NumberArray[0]] + array[NumberArray[1]] + array[NumberArray[2]] + array[NumberArray[3]]);
          start.setColor("#2f9d66");
        break;
    }
    await sleep(500);
    await msg.edit(start);
  }


   /* Console Logs For Testing*/
   console.log("Numbers: " + from + " | "+ to);
   console.log("Numbers Length:" + number.toString().length);
   console.log("Picked: " + number);
   console.log("NumberArray: " + NumberArray);
}

/* List Of Functions*/
function NumberPicker(min, max) {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
module.exports.help = {
    name: "random",
    description: "generates a random number (0 - 9999) ",
    usage: "/random (0 - 9998) (0 - 9999)",
    type: "Fun"
}
