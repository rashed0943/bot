const Discord = module.require("discord.js");

var deaths = [
"[NAME1] ran over [NAME2] with a School Bus! :bus:",
  "[NAME1] poisoned [NAME2]’s candy bar",
  "[NAME2] swallowed a grenade",
  "[NAME1] sent John Wick to kill [NAME2]!",
  "[NAME1] pressed Ctrl+Alt+Del deleting [NAME2] from the Universe!",
  "[NAME1] threw the ban hammer at [NAME2] for spamming",
  "[NAME2] stepped on a lego brick",
  "[NAME2] went to go look for his father but never came back",
  "[NAME2] has GO commit die",
  "[NAME1] has shorten your lifespan noob [NAME2]",
  "[NAME2] has go commit die the musical",
  "[NAME2] has commit bath toaster ",
  "[NAME2] has Committed scooter ankle.",
  "[NAME1] Spiked [NAME2] drink! 😱"
];

module.exports.run = async (client, message, args) => {
    let member = await message.mentions.members.first();
const user = message.mentions.users.first(); // returns the user object if an user mention exists

if (user == message.author)
  return  message.channel.send({embed: {
            color: 3447003,
            title: "Bruh are you dumb or somthing, killing your self is bad!"
        }}).then(msg => msg.delete(5500));
    if (!member) {
        message.delete();
        return message.channel.send({embed: {
            color: 3447003,
            title: "Mention a valid member of this server!"
        }}).then(msg => msg.delete(2132));
    }

    var pickeddeath = deaths[Math.floor(Math.random()*deaths.length)];
    var change1 = pickeddeath.replace("[NAME1]", message.author.username);
    var change2 = change1.replace("[NAME2]", member.displayName);
  
    await message.channel.send({embed: {
        color: 3447003,
        author: {
          name: "Tombstone of " + member.displayName + "!",
          icon_url: member.user.displayAvatarURL
        },
        title: "Cause of Death",    
        description: change2
    }});
}

module.exports.help = {
    name: "kill",
    description: "Murders a user",
    usage: "kill <user>",
    type: "Fun" 
}