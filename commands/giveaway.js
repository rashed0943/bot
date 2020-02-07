const discord = require("discord.js");
 
module.exports.run = async (bot, message, args) => {
 
    // Argumenten die we later nodig hebben.
    var item = "";
    var time;
    var winnerCount;
 
    // Nakijken als je perms hebt om dit command te doen.
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Sorry, you can't do this");
 
    // !giveaway aantalWinnaars seconden itemOmTeWinnen.
 
    // Aantal winnaars opvragen.
    winnerCount = args[0];
    // Tijd hoelang het moet duren.
    time = args[1];
    // Welke prijs men kan winnen.
    item = args.splice(2, args.length).join(' ');
 
    // Verwijder het bericht dat net is gemaakt door de gebruiker.
    message.delete();
 
    // Verval datum berekenen.
    var date = new Date().getTime();
    var dateTime = new Date(date + (time * 1000));
var ya = new discord.RichEmbed()
.setTitle("Error")
          .setDescription(`No one joined so bot wins: ***${item}***`)
.setColor("RANDOM")
    var giveawayEmbed = new discord.RichEmbed()
        .setTitle("🎉 **GIVEAWAY** 🎉")
        .setThumbnail("https://media.discordapp.net/attachments/635116976510861321/662679694759690270/image0.gif")
        .setFooter(`Expires: ${dateTime}`)
        .setDescription("***React 🎉 to join the Giveaway***")
        .addField('Giveaway prize',`***${item}***`);
        

       
 
    // Verzend embed en zet de reactie op de popper.
    var embedSend = await message.channel.send(giveawayEmbed);

  
  embedSend.react("🎉");
 
    // Zet een timeout die na het aantal seconden af gaat.
    setTimeout(function () {
 
        // Argumenten die we nodig hebben.
        var random = 0;
        var winners = [];
        var inList = false;
 
        // Verkrijg de gebruikers die gereageerd hebben op de giveaway.
        var peopleReacted = embedSend.reactions.get("🎉").users.array();
 
        // Hier gaan we al de mensen over gaan en kijken als de bot er tussen staan
        // De bot moeten we uit de lijst weghalen en dan gaan we verder.
        for (var i = 0; i < peopleReacted.length; i++) {
            if (peopleReacted[i].id == bot.user.id) {
                peopleReacted.splice(i, 1);
                continue;
            }
        }
 
        // Hier kijken we na als er wel iemand heeft meegedaan.
        if (peopleReacted.length == 0) {
            return  message.channel.send(ya)
        }
 
        // Tijdelijk kijken we na als er te wienig mensen hebben mee gedaan aan de wedstrijd.
        if (peopleReacted.length < winnerCount) {
            return message.channel.send(`There are too few people who participated, that's why the bot won ***${item}***.`);
        }
 
        // Voor het aantal winnaars dat we eerder hebben opgegeven gaan we een random nummer aanmaken en de user in een array zetten.
        for (var i = 0; i < winnerCount; i++) {
 
            inList = false;
 
            // Aanmaken van een random getal zodat we een user kunnen kiezen.
            random = Math.floor(Math.random() * peopleReacted.length);
 
            // Als een winnaar al voorkomt in de winnaars lijst dan moeten we opnieuw gaan zoeken naar een andere winnaar.
            for (var y = 0; y < winners.length; y++) {
                // Nakijken als de geslecteerde winnaar al in de lijst zit.
                if (winners[y] == peopleReacted[random]) {
                    // We zetten i 1 minder zodat we opnieuw kunnen doorgaan in de lijst.
                    i--;
                    // We zetten dit op true zodat we weten dat deze al in de lijst zit.
                    inList = true;
                    break;
                }
            }
 
            // Zit deze niet in de lijst gaan we deze toevoegen.
            if (!inList) {
                winners.push(peopleReacted[random]);
            }
 
        }
 
        // Voor iedere winnaar gaan we een bericht sturen.
        for (var i = 0; i < winners.length; i++) {
var End = new discord.RichEmbed()
        .setTitle("🎉 **End of GIVEAWAY** 🎉")
        .setThumbnail("https://media.discordapp.net/attachments/596716658857345026/671050749891051531/image0.png")
        .addField("Winner item",`***item***`)
        .setDescription("Winner:" + winners[i])
message.edit(giveawayEmbed)
   message.channel.send(End);
    ;
        }
 
    }, 1000 * time);
 
 
}

module.exports.help = {
      name:"Giveaway",
    description: "Custom giveaway to my liking",
    usage: "/giveaway <number of winners> <time in seconds> <winner item>]",
    type: "Moderation"
}