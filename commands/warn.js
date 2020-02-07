
const Discord = require('discord.js');
exports.run = (client, message, args) => {
    var embedColor = 'RANDOM' // Change this to change the color of the embeds!
    function emoji (id){
return client.enojis.get(id).toString();
}
var isstaff = new Discord.RichEmbed() // Creates the embed that's DM'ed to the user when their warned!
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(`❌You can not warn a staff❌` )
        .setFooter(message.author.username, message.author.ID)
        .setTimestamp();
    
    var missingPermissionsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the user is missing permissions
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('❌Insufficient Permissions!❌')
        .setDescription('You need the `MANAGE_MESSAGES` permission to use this command!')
        .setTimestamp();
    var missingArgsEmbed = new Discord.RichEmbed() // Creates the embed thats sent if the command isnt run right
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Missing Arguments!')
        .setDescription('Usage: `warn [@User] [Reason]')
        .setTimestamp();
  
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(missingPermissionsEmbed); // Checks if the user has the permission
    let mentioned = message.mentions.users.first(); // Gets the user mentioned!
    if(!mentioned) return message.channel.send(missingArgsEmbed); // Triggers if the user donsn't tag a user in the message
   let profileMentionned = message.mentions.members.first();
    if (!profileMentionned) return message.channel.send("some error message")
    if (profileMentionned.hasPermission("MANAGE_MESSAGES")) return message.channel.send(isstaff);
  message.channel.send(emoji("648388978004721675"))
    let reason = args.slice(1).join(' ') // .slice(1) removes the user mention, .join(' ') joins all the words in the message, instead of just sending 1 word
    if(!reason) return message.channe.send(missingArgsEmbed); // Triggers if the user dosn't provide a reason for the warning

    var warningEmbed = new Discord.RichEmbed() // Creates the embed that's DM'ed to the user when their warned!
        .setColor(embedColor)
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(`You've been warned in ${message.guild.name}`)
        .addField('Warned by', message.author.tag)
        .addField('Reason', reason)
        .setFooter("Warn Issued")
        .setTimestamp();
  console.log(warningEmbed)
    mentioned.send(warningEmbed); // DMs the user the above embed!
    var warnSuccessfulEmbed = new Discord.RichEmbed() // Creates the embed thats returned to the person warning if its sent.
        .setColor(embedColor)
        .setTitle('✅User Successfully Warned !✅')
        .setFooter('Warn Issued')
        .setTimestamp();
    message.channel.send(warnSuccessfulEmbed); // Sends the warn successful embed
    message.delete(); // Deletes the command
  
}


module.exports.help = {
    name: "warn",
    description: "Warn a member",
    usage: "Warn <mention> <reason>",
    type: "Moderation"
}