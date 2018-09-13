// Load up the discord.js library
const Discord = require("discord.js");

// This is your client. Some people call it `bot`, some people call it `self`, 
// some might call it `cootchie`. Either way, when you see `client.something`, or `bot.something`,
// this is what we're refering to. Your client.
const client = new Discord.Client();

// Here we load the config.json file that contains our token and our prefix values. 
const config = require("./config.json");
// config.token contains the bot's token
// config.prefix contains the message prefix.

client.on("ready", () => {
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Depressed`);
});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  // Let's go with a few common example commands! Feel free to delete or change those.
  
  if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
  }
  

  
 
  if (command === "help") { // creates a command *help
    var embedhelpmember = new Discord.RichEmbed() // sets a embed box to the variable embedhelpmember
        .setTitle("**Help Center**\n") // sets the title to List of Commands
        .addField(" - help", "Displays this message (Correct usage: c-help)") // sets the first field to explain the command *help
        .addField(" - myinfo", "Tells info about you :grin:") // sets the field information about the command *info
        .addField(" - ping", "Tests the bots ping (Correct usage: c-ping)") // sets the second field to explain the command *ping
        .addField("Bot designed for CupidRoom || Broken.Png") //sets a field
        .setThumbnail("http://oi66.tinypic.com/2zeecu1.jpg")
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

if (command === "info") { // creates the command *info
  message.channel.send(`Hey! My name is CupidRoom and I'm here to assist you! You can do c-help to see all of my commands! If you have any problems with the me, you can contact an my owner.`) // gives u info
}

if (command === "bans") {
  message.guild.fetchBans()
  .then(bans => message.channel.send('The server has banned ' + `${bans.size}` + ' Person'))
.catch(console.error);
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
 if (command == "kick") {
  if(!message.channel.guild) return message.reply('** This command only for servers**');

if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
let user = message.mentions.users.first();
let reason = message.content.split(" ").slice(2).join(" ");
let kicklog = message.guild.channels.find('name', 'kick-log');
/*let b5bzlog = client.channels.find("name", "5bz-log");
 
if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
if (message.mentions.users.size < 1) return message.reply("**Please mention someone**");
if(!reason) return message.reply ("**Type the reason or type `none` for no reason **");
if (!message.guild.member(user)
.kickable) return message.reply("**i can't kick someone higher than me **");

message.guild.member(user).kick();

const kickembed = new Discord.RichEmbed()
.setAuthor(`KICKED!`, user.displayAvatarURL)
.setColor("#587caf")
.setTimestamp()
.addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
.addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
.addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
message.channels.get(kicklog.id).send({
embed : kickembed
})
}

 

if(command=== "add.r") {
  if(!message.channel.guild) return message.reply('**Commands in the server**').catch(console.error);
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply('⚠ **You do not have permissions**').catch(console.error);
  let args = message.content.split(" ").slice(1);
    message.guild.createRole({
      name : args.join(' '),
      color : "RANDOM",
      permissions : [1]
    }).then(function(role){
      message.addRole(role).then(message.channel.sendMessage('**Done :white_check_mark:**')).catch(console.error).then(message => {message.delete(10000)});
    })
  }
  

  if (command === "mute") {
   
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** There is no 'Manage Roles' with you **").catch(console.error);
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();

let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
let mutelog = message.guild.channels.find('name', 'mute-log');
if (!mutelog) return message.reply('I cannot find a mute-log channel');
if (reason.length < 1) return message.reply('You must supply a user and reason for the kick.');
if (!muteRole) return message.reply("** There is no role called 'Muted' **").then(message.channel.sendMessage('c-add.r Muted')).then(message.channel.sendMessage('Try again')).catch(console.error);
if (message.mentions.users.size < 1) return message.reply('**Mention some one please**').catch(console.error);

const embed = new Discord.RichEmbed()
.setColor(0x00AE86)
.setTimestamp()
.addField('Usage:', 'mute/unmute')
.addField('Muted:', `${user.username}#${user.discriminator} (${user.id})`)
.addField('By:', `${message.author.username}#${message.author.discriminator}`)

if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

if (message.guild.member(user).roles.has(muteRole.id)) {
 return message.reply("** ALREADY MUTED  **").catch(console.error);
} else {
message.guild.member(user).addRole(muteRole).then(() => {
  

  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setTitle('User Muted')
  .setColor(0x32CD32)
  .setDescription(user.username + " has been muted by " + `**${message.author.username}** `)
  .setThumbnail("http://oi66.tinypic.com/2zeecu1.jpg")
  message.channels.get(mutelog.id).sendEmbed(embed);
 
}); 
}
}

if (command === "add.t") {
  if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(" `MANAGE_CHANNELS`:laughing::laughing:ليس لديك صلاحية:laughing::laughing: ");
let args = message.content.split(" ").slice(1);
message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('✅ **Text Channel Created** ✅ ').then(message => {message.delete(10000)});

}

if (command === "add.v") {
  if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(" `MANAGE_CHANNELS` :laughing::laughing:ليس لديك صلاحية:laughing::laughing: ");
let args = message.content.split(" ").slice(1);
message.guild.createChannel(args.join(' '), 'voice');
message.channel.sendMessage('✅ **Voice Channel Created** ✅ ').then(message => {message.delete(10000)});

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
  .setThumbnail("http://oi66.tinypic.com/2zeecu1.jpg")
  .addField('Reason', reason);
  message.channel.sendEmbed(embed);
  return bot.channels.get(modlog.id).sendEmbed(embed);
  }
 }
 

if (command == "roleadd") {
  if (!message.channel.guild) return;
  if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:You Dont have perms ... **").then(msg => msg.delete(5000));;
  if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("I dont have perms... ").then(msg => msg.delete(5000));;
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('**Mention someone!**').then(msg => {msg.delete(5000)});
  let MRole = message.content.split(" ").slice(2).join(" ");
  if(!MRole)return message.reply("Role name !").then(msg => {msg.delete(5000)});
  message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
  message.reply('*** Role Added! :white_check_mark:  ***').then(msg => {msg.delete(10000)});
  }

  if (command == "roledel") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:You Dont have perms ... **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("I dont have perms... ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**Mention someone!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("Role name !").then(msg => {msg.delete(5000)});
    message.guild.member(user).removeRole(message.guild.roles.find("name", MRole));
    message.reply('*** Role Deleted! :white_check_mark:  ***').then(msg => {msg.delete(10000)});
    }

if (command === "unmute") {
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
let user = message.mentions.users.first();
let modlog = client.channels.find('name', 'mute-log');
let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
if (!muteRole) return message.reply("** no role called 'Muted' **").catch(console.error);
if (message.mentions.users.size < 1) return message.reply('** Mention someone first **').catch(console.error);
const embed = new Discord.RichEmbed()
.setColor(0x00AE86)
.setTimestamp()
.addField('Useage:', 'Mute/UnMute')
.addField('UnMuted:', `${user.username}#${user.discriminator} (${user.id})`)
.addField('By:', `${message.author.username}#${message.author.discriminator}`)

if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** Need a Permission [`Manage Roles`] **').catch(console.error);

if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("** ALREADY UNMUTED **").catch(console.error);
} else {
message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**User Unmuted :**" + user.username + "**By**" + message.author).catch(console.error);
});
}

};



  
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  }
});

client.login(config.token);