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
  client.user.setActivity(`Moderating CupidRoom`);
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
  
  if(command === "kick") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Administrator", "Moderator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable) 
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setTitle('User Kicked')
      .setColor(0x32CD32)
      .setDescription(user.username + " has been kicked by " + `**${message.author.username}** `)
      .setThumbnail("http://oi66.tinypic.com/2zeecu1.jpg")
      message.channel.sendEmbed(embed);

  }

  if (command == "mute") { // creates the command mute
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) ) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
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
  if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )) return message.reply("Sorry, you do not have the permission to do this!"); // if author has no perms
    var unmutedmember = message.mentions.members.first(); // sets the mentioned user to the var kickedmember
    if (!unmutedmember) return message.reply("Please mention a valid member of this server!") // if there is no kickedmmeber var
    unmutedmember.removeRole(mutedrole) //if reason, kick
        .catch(error => message.reply(`Sorry ${message.author} I couldn't mute because of : ${error}`)); //if error, display error
    message.reply(`${unmutedmember.user} has been unmuted by ${message.author}!`); // sends a message saying he was kicked
}


  if (command === "help") { // creates a command *help
    var embedhelpmember = new Discord.RichEmbed() // sets a embed box to the variable embedhelpmember
        .setTitle("**Help Center**\n") // sets the title to List of Commands
        .addField(" - help", "Displays this message (Correct usage: c-help)") // sets the first field to explain the command *help
        .addField(" - servercount", "Displays the current ammount of servers im in. (Correct usage: c-servercount)") // sets the first field to explain the command *help
        .addField(" - myinfo", "Tells info about you :grin:") // sets the field information about the command *info
        .addField(" - ping", "Tests the bots ping (Correct usage: c-ping)") // sets the second field to explain the command *ping
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

if (command == "info") { // creates the command *info
  message.channel.send(`Hey! My name is GalaxyBot and I'm here to assist you! You can do c-help to see all of my commands! If you have any problems with the me, you can contact an my owner.`) // gives u info
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



  if(command === "ban") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
    if(!message.member.roles.some(r=>["Administrator"].includes(r.name)) )
      return message.reply("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.bannable) 
      return message.reply("I cannot ban this user! Do they have a higher role? Do I have ban permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't ban because of : ${error}`));

      const embed = new Discord.RichEmbed()
      .setAuthor(message.author.username)
      .setTitle('User Banned')
      .setColor(0x32CD32)
      .setDescription(user.username + " has been banned by " + `**${message.author.username}** `)
      .setThumbnail("http://oi66.tinypic.com/2zeecu1.jpg")
      .addField('Reason', reason);
      message.channel.sendEmbed(embed);
  }
  
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