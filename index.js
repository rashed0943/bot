const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const http = require('http');
const express = require('express');
const app = express();

const discord_token = process.env.TOKEN;
const prefix = process.env.PREFIX;

const bot = new Discord.Client ();

bot.on('guildMemberAdd', member => {
   member.send("Welcome to the server!");
});
setInterval(() => {

   http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);

 }, 280000);
const newUsers = new Discord.Collection();
var botMembers = 0;


app.get("/", (request, response) => {
  var D = new Date();
  var IP = request.headers['x-forwarded-for'].split(",").shift() || request.connection.remoteAddress;
  
  function getAMPM(date) {
    var hours = date.getHours() + 1;
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;  
  }
  
  console.log(`Ping at ${getAMPM(D)}, Received from ${IP}`);
  response.sendStatus(200);
});

app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

function getDefaultChannel(guild) { 
  if (guild.systemChannelID) 
    if (guild.channels.get(guild.systemChannelID).permissionsFor(guild.client.user).has("SEND_MESSAGES")) return guild.channels.get(guild.systemChannelID)  
  
  if(guild.channels.exists("name", "general"))
    if (guild.channels.find("name", "general").permissionsFor(guild.client.user).has("SEND_MESSAGES")) return guild.channels.find("name", "general")   

  return guild.channels
   .filter(c => c.type === "text" &&
     c.permissionsFor(guild.client.user).has("SEND_MESSAGES"))
   .first();  
}

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const defaultChannel = getDefaultChannel(guild); 
  newUsers.set(member.id, member.user);


  if (newUsers.size > 5) {
    newUsers.clear();
  }
});


let guildArray = client.guilds.array();

//joined a server
client.on("guildCreate", guild => {
    console.log("Joined a new guild: " + guild.name);
guild.channels.find(`name`,`general`).send(`Thx for invite`);

})

//removed from a server
client.on("guildDelete", guild => {
    console.log("Left a guild: " + guild.name);
    //remove from guildArray
})



 
client.on("ready", () => {
  client.guilds.forEach((guild) => {
    var members = guild.memberCount;

    botMembers = botMembers + members;
  });
  
  let currentmessage;
  var Messages = [
      "https://discord.gg/j8rfQWX | /help",
    `on ${client.guilds.size} Guilds!`,
    `With ${botMembers} users!`,
    `With Servers`,
    `Oof | made by シRashedت#3457`,
    `UwU | Made with love and care!`,
    `OwO with the owners`,
`With my creator`,
`Server logs`,
`⚙️scripts⚙️`,
    `(^.^)`,
`（╹◡╹）`,
`˚✧₊⁎❝᷀ົཽ≀ˍ̮ ❝᷀ົཽ⁎⁺˳✧༚`,
`ʕ⁎̯͡⁎ʔ༄`,
  `TOXIC.EXe = TRUE`,
`Rage.exe 💯 `,
`(●´ω｀●)`,
`【Bot.exe】`,
    `New updates`,
`Beta Release 🆕`,
`♾`,
`👁‍🗨 watching servers! 👁‍🗨`
  ];
  
  client.user.setActivity(`on ${client.guilds.size} guilds!`);
  
  setInterval(function() {
    var randomMessage = Messages[Math.floor(Math.random()*Messages.length)];
    client.user.setActivity(randomMessage);
  }, 15000);
});

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.login(discord_token);
