const Discord = require("discord.js"); // use discord.js

const BOT_TOKEN = "NDg5MTE5MTI5MjM2NjY4NDI2.Dnp-LQ.z5mWQIoXd2flHpo5yXwm7X4PHp8" // bot's token
const PREFIX = "c-" // bot's prefix
const purge = require("./prune.js");
var client = new Discord.Client();
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
 console.log(Date.now() + " Just got pinged!");
 response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
 http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

{
"install": {
 "include": [
   "^package\\.json$",
   "^\\.env$"
 ]
},
"restart": {
 "exclude": [
   "^public/",
   "^dist/"
 ],
 "include": [
   "\\.js$",
   "\\.json"
 ]
},
"throttle": 900000
}

var eightball = [ // sets the answers to an eightball
    "yes!",
    "no...",
    "maybe?",
    "probably",
    "I don't think so.",
    "never!",
    "you can try...",
    "up to you!",
]

var bot = new Discord.Client(); // sets Discord.Client to bot

bot.on("ready", function() { // when the bot starts up, set its game to Use *help and tell the console "Booted up!"
    bot.user.setGame("Main Prefix c- | c-help") // sets the game the bot is playing
    console.log("Booted up!") // messages the console Booted up!
});

bot.on("message", function(message) { // when a message is sent
    if (message.author.equals(bot.user)) return; // if the message is sent by a bot, ignore

    if (!message.content.startsWith(PREFIX)) return; // if the message doesn't contain PREFIX (*), then ignore

    var args = message.content.substring(PREFIX.length).split(" "); // removes the prefix from the message
    var command = args[0].toLowerCase(); // sets the command to lowercase (making it incase sensitive)
    var mutedrole = message.guild.roles.find("name", "muted");

    if (command == "help") { // creates a command *help
        var embedhelpmember = new Discord.RichEmbed() // sets a embed box to the variable embedhelpmember
            .setTitle("**Help Center**\n") // sets the title to List of Commands
            .addField(" - help", "Displays this message (Correct usage: c-help)") // sets the first field to explain the command *help
            .addField(" - servercount", "Displays the current ammount of servers im in. (Correct usage: c-servercount)") // sets the first field to explain the command *help
            .addField(" - myinfo", "Tells info about you :grin:") // sets the field information about the command *info
            .addField(" - prefix", "Displays my default prefix") // sets the field information about the command *info
            .addField(" - ping", "Tests the bots ping (Correct usage: c-ping)") // sets the second field to explain the command *ping
            .addField(" - roll", "Rolls a random number from 1-100! (Correct usage: c-roll)") // sets the field to the 8ball command
            .addField(" - 8ball", "Answers to all of your questions! (Correct usage: c-8ball [question])") // sets the field to the 8ball command
            .addField("Need Extra Help?", "Join the Official server of my owner: https://discord.gg/M262n2z.")
            .setThumbnail("https://cdn.pixabay.com/photo/2013/07/12/18/09/help-153094_960_720.png")
            .setColor("0000ff") // sets the color of the embed box to orange
            .setFooter("You need help, do you?") // sets the footer to "You need help, do you?"
        var embedhelpadmin = new Discord.RichEmbed() // sets a embed box to the var embedhelpadmin
            .setTitle("**List of Admin Commands**\n") // sets the title
            .setDescription("Default Prefix: c-")
            .addField(" - say", "Makes the bot say whatever you want (Correct usage: c-say [message])")
            .addField(" - mute", "Mutes a desired member with a reason (Corect usage: c-mute @username [reason])") // sets a field
            .addField(" - unmute", "Unmutes a muted player (Correct usage: c-unmute @username)")
            .addField(" - kick", "Kicks a desired member with a reason (Correct usage: c-kick @username [reason])") //sets a field
            .addField(" - warn", "Warns a desired member with a reason (Correct usage: c-warn @username [reason])") //sets a field
            .addField(" - ban", "Bans a desired member with a reason (Correct usage: c-ban @username [reason])") //sets a field
            .setColor(0xFF0000) // sets a color
            .setFooter("Ooo, an admin!") // sets the footer
        message.channel.send(embedhelpmember); // sends the embed box "embedhelpmember" to the chatif
        if(message.member.roles.some(r=>["Server Moderators"].includes(r.name)) ) return message.channel.send(embedhelpadmin); // if member is a botadmin, display this too
    }

    if (command == "info") { // creates the command *info
        message.channel.send(`Hey! My name is GalaxyBot and I'm here to assist you! You can do c-help to see all of my commands! If you have any problems with the me, you can contact an my owner.`) // gives u info
    }

    if (command == "ping") { // creates a command *ping
        message.channel.send(`Pong! \`${client.pings[0]}ms\``); // answers with "Pong!"
    }

    if (command == "8ball") { // creates the command 8ball
        if (args[1] != null) message.reply(eightball[Math.floor(Math.random() * eightball.length).toString(16)]); // if args[1], post random answer
        else message.channel.send("Ummmm, what is your question? :rolling_eyes: (Correct usage: *8ball [question])"); // if not, error
    }

    if (command === "prefix") {
      message.channel.sendMessage("The default prefix is c-")
    }

    if (command === "say") {
      if (message.author.id == "335674585762758659") {
      var argresult = args.join(' ');
      if (!argresult) argresult = null;
      bot.user.sendMessage(argresult);
       message.delete();
      message.channel.send(`${args.join(' ')}`);
      } else {
        message.reply("Until further notice, this command is a bot developer only command.");
      }
    }

    if (command === "setgame") {
      if (message.author.id == "335674585762758659") {
      var argresult = args.join(' ');
      if (!argresult) argresult = null;
      bot.user.setGame(argresult);
      message.reply("It has been set..");
      } else {
        message.reply("DONT EVEN TRY IT BOI!");
      }
    }

    if (command === "setstatus") {
      if (message.author.id == "335674585762758659") {
      var argresult = args.join(' ');
      bot.user.setStatus(argresult);
      message.reply("It has been set..");
      } else {
        message.reply("DONT EVEN TRY IT BOI!");
      }
    }

    /* if(command === "purge") {
        let messagecount = parseInt(args[1]) || 1;

        var deletedMessages = -1;

        message.channel.fetchMessages({limit: Math.min(messagecount + 1, 100)}).then(messages => {
            messages.forEach(m => {
                if (m.author.id == bot.user.id) {
                    m.delete().catch(console.error);
                    deletedMessages++;
                }
            });
        }).then(() => {
                if (deletedMessages === -1) deletedMessages = 0;
                message.channel.send(`:white_check_mark: Purged \`${deletedMessages}\` messages.`)
                    .then(m => m.delete(2000));
        }).catch(console.error);
    } */

    if (command === "roll") {
     message.channel.sendMessage(Math.floor(Math.random() * 100));
    }

    if (command == "mute") { // creates the command mute
        if (!message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
        var mutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
        if (!mutedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
        if (mutedmember.hasPermission("ADMINISTRATOR")) return message.reply("I cannot mute this member!") // if memebr is an admin
        var mutereasondelete = 10 + mutedmember.user.id.length //sets the length of the kickreasondelete
        var mutereason = message.content.substring(mutereasondelete).split(" "); // deletes the first letters until it reaches the reason
        var mutereason = mutereason.join(" "); // joins the list kickreason into one line
        if (!mutereason) return message.reply("Please indicate a reason for the mute!") // if no reason
        mutedmember.addRole(mutedrole) //if reason, kick
            .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
        message.reply(`${mutedmember.user} has been muted by ${message.author} because: ${mutereason}`); // sends a message saying he was kicked
    }

    if (command == "unmute") { // creates the command unmute
        if (!message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
        var unmutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
        if (!unmutedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
        unmutedmember.removeRole(mutedrole) //if reason, kick
            .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
        message.reply(`${unmutedmember.user} has been unmuted by ${message.author}!`); // sends a message saying he was kicked
    }

    /* if (command == "kick") { // creates the command kick
        if (!message.member.roles.some(r=>["bot-admin"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
        var kickedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
        if (!kickedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
        if (!kickedmember.kickable) return message.reply("I cannot kick this member!") // if the member is unkickable
        var kickreasondelete = 10 + kickedmember.user.id.length //sets the length of the kickreasondelete
        var kickreason = message.content.substring(kickreasondelete).split(" "); // deletes the first letters until it reaches the reason
        var kickreason = kickreason.join(" "); // joins the list kickreason into one line
        if (!kickreason) return message.reply("Please indicate a reason for the kick!") // if no reason
        kickedmember.kick(kickreason) //if reason, kick
            .catch(error => message.reply(`Sorry @${message.author} I couldn't kick because of : ${error}`)); //if error, display error
        message.reply(`${kickedmember.user.username} has been kicked by ${message.author.username} because: ${kickreason}`); // sends a message saying he was kicked
    } */

    if (command === "kick") {
     if (message.member.hasPermission("KICK_MEMBERS")) {
       let reason = args.slice(1).join(' ');
     let user = message.mentions.users.first();
     let modlog = message.guild.channels.find('name', 'mod-log');
     if (!modlog) return message.reply('I cannot find a mod-log channel');
     if (reason.length < 1) return message.reply('You must supply a user and reason for the kick.');
     if (message.mentions.users.size < 1) return message.reply('You must mention someone to kick them.').catch(console.error);
    message.channel.sendMessage(user)
    message.delete();
     if (!message.guild.member(user).kickable) return message.reply('I cannot kick that member');
     message.guild.member(user).kick();

     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username)
     .setTitle('User Kicked')
     .setColor(0x32CD32)
     .setDescription(user.username + " has been kicked by " + `**${message.author.username}** `)
     .setThumbnail("http://www.clker.com/cliparts/a/K/l/k/C/w/light-blue-warning-sign-hi.png")
     message.channel.sendEmbed(embed);
     return bot.channels.get(modlog.id).sendEmbed(embed);
     }
    }

    if (command === "warn") {
     if (message.member.hasPermission("ADMINISTRATOR")) {
      let reason = args.slice(1).join(' ');
     let user = message.mentions.users.first();
     let modlog = message.guild.channels.find('name', 'mod-logs');
     if (!modlog) return message.reply('I cannot find a mod-logs channel');
     if (reason.length < 1) return message.reply('You must supply a reason for the warning.');
     if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
     message.channel.sendMessage(user)
     const embed = new Discord.RichEmbed()
     .setAuthor(message.author.username)
     .setTitle('Warning Issued')
     .setColor(0x32CD32)
     .setDescription(user.username + " has been warned by " + `**${message.author.username}** ` + "\nWarnings expire after **7 days**. \nPlease familiarize yourself with the \nserver rules and warning thresholds.")
     .setThumbnail("http://www.clker.com/cliparts/a/K/l/k/C/w/light-blue-warning-sign-hi.png")
     .addField('Reason', reason);
     message.delete().catch(O_o=>{});
     message.channel.send(`${member.user}`)
     message.channel.sendEmbed(embed);
     return bot.channels.get(modlog.id).sendEmbed(embed);
     }
   }

   if (command === "ban") {
    if (message.member.hasPermission("BAN_MEMBERS")) {
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    let modlog = message.guild.channels.find('name', 'mod-log');
    if (!modlog) return message.reply('I cannot find a mod-log channel');
    if (reason.length < 1) return message.reply('You must supply a reason for the ban.');
    if (message.mentions.users.size < 1) return message.reply('You must mention someone to ban them.').catch(console.error);

    if (!message.guild.member(user).bannable) return message.reply('I cannot ban that member');
    message.guild.ban(user, 2);
   message.channel.sendMessage(user)
    message.delete();

    const embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setTitle('User Banned')
    .setColor(0x32CD32)
    .setDescription(user.username + " has been banned by " + `**${message.author.username}** `)
    .setThumbnail("https://thecliparts.com/wp-content/uploads/2016/11/red-alert-warning-clipart.png")
    .addField('Reason', reason);
    message.channel.sendEmbed(embed);
    return bot.channels.get(modlog.id).sendEmbed(embed);
    }
   }

   if (command === "myinfo") {

    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setDescription("This is **_YOUR_** info!")
    .setColor("0x008B8B")
    .addField("Username", `${message.author.username}#${message.author.discriminator}`)
    .addField("ID", message.author.id)
    .addField("Created on/at", message.author.createdAt)

    message.channel.sendEmbed(embed);
   }

   if (command === "servercount") {

     let embed = new Discord.RichEmbed()
     .setTitle("Server Count")
     .setColor("00ff00")
     .setDescription("I am currently in " + bot.guilds.size + " discord servers!")

    message.channel.sendEmbed(embed);
   }

});

client.login(BOT_TOKEN); // connects to the bot
