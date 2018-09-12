const Discord = require('discord.js');
const client = new Discord.Client();
const plus = ['422067437845086219'];
const fs = require("fs")
const prefix = "c-"

const adminprefix = "-/";
const devs = ['298732816995319809'];
client.on('message', message => {
  const child = require("child_process")
  let user = message.mentions.users.first();
    if(message.content === adminprefix + "restart") {
      if (!devs.includes(message.author.id)) return;
          message.channel.send(`⚠️ **Bot restarting by ${message.author.username}**`)   
        client.destroy();
        child_process.fork(__dirname + "/server.js");
    }
  
  });

client.on('message', (message) => {
  let args = message.content.split(" ").slice(1).join(" ")
if(message.content.startsWith(prefix + 'ft')) {
  let fn = require("fortnite")
  let ft = new fn("3e961fa0-66de-4c30-a7ba-f4a0c121916b")

  //c-ft TksRokz pc
  let username = args[0];
  let platform = args[1] || 'pc';
  
  let data = ft.getinfo(username, platform).then(data => {
    
    let stats = data.lifetineStats; 
    let kills = stats.find(s => s.Stat == 'kills')
                           let wins = stats.find(s => s.Stat == 'wins'); 
                           let kd = stats.find(s => s.Stat == 'kd'); 
                           let mPlayed = stats.find(s => s.Stat == 'matchesPlayed'); 
                           let tPlayed = stats.find(s => s.Stat == 'timePlayed'); 
                           let asTime = stats.find(s => s.stat == 'avgsurvivalTime'); 
    
                           let embed = new Discord.RichEmbed()
                           .setTitle ("Fortnite stats")
                           .setAuthor(data .username) 
                           .setcolor('RANDOM') 
                           .addField("Kills", kills.value, true) 
                           .addField ("Wins", wins.value, true) 
                           .addField ("KD", kd.value, true) 
                           .addField ("Matches Played", mPlayed.value, true) 
                           .addField ("Tine Played", tPlayed.value, true) 
                           .addField("Averag Survival Time", asTime.value, true);
    
  }).catch(e => {
    console.log(e)
    message.channel.send('**Sorry We couldn‘t find the name `' + data.username + '` in our database**')
  });
}
     })
client.on('message', message => {
  if(message.content == prefix + 'gid') {
    message.channel.send('**Your Guild :id: is**')
  .then(message.channel.send(message.guild.id))
  }
  });

client.on('guildCreate', guild => {
  let user = guild.owner
  let botuser = guild.roles.find("name","Bot User")
  guild.guilds.get("422067437845086219").guild.member(user).addRole(botuser)
});
client.on('guildCreate', guild => {
  client.channels.get("442631482524172289").send(`**Woops new server ✅
Server name: __${guild.name}__
Server owner: __${guild.owner}__**`)
});

client.on('message', message => {
  if(message.content === prefix + 'myid') {
    
    message.channel.send('**The :id: is : `' + message.author.id + '`**.')
  }
})
client.on('message', message => {

     let args = message.content.split(' ').slice(1)

if(message.content.startsWith(prefix + 'setGame')) {
    if(message.author.id != '298732816995319809') return;
    else {
    client.user.setGame(args.join(' '));
}
}
if(message.content.startsWith(prefix + 'setStreaming')) {
    if(message.author.id != '298732816995319809') return;
    else {
    client.user.setActivity(args.join(' '), {type: 'STREAMING', url:'https://www.twitch.com/tornado'});
}
}
if(message.content.startsWith(prefix + 'setListening')) {
    if(message.author.id != '298732816995319809') return;
    else {
    client.user.setActivity(args.join(' '), {type: 'LISTENING'});
}
}
if(message.content.startsWith(prefix + 'setWatching')) {
    if(message.author.id != '298732816995319809') return;
    else {
    client.user.setActivity(args.join(' '), {type: 'WATCHING'});
}
}


if(message.content === 'c-back') {
  client.user.setGame(prefix + `help | Work On ${client.guilds.size} Serevers`,'https://www.twitch.tv/Tornado');
}
   if(message.content === 'c-username') {
     client.user.setUsername(args);
   }
   
 });

//ping
            client.on("message", message => {
              if (message.content === prefix + "ping") {
                  const embed = new Discord.RichEmbed()
            .setColor("#587caf")
            .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
            message.channel.sendEmbed(embed).then(message => {message.delete(10000)});
              }
            });

            client.on('ready', () => {
            client.user.setGame(prefix + `help | Work On ${client.guilds.size} Serevers`,'https://www.twitch.tv/Tornado');
            console.log('Im Ready!');
            });

          client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
        let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
        if (message.content.split(' ')[0] == prefix + 'tb') {
            if (!args[1]) {
                message.channel.send("**c-bc <message>**");
                return;
            }
            message.guild.members.forEach(m => {
                if (!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                    .setAuthor(message.author.username, message.author.avatarURL)
                    .addField('** Server**', `${message.guild.name}`, true)
                    .addField(' **Sender **', `${message.author.username}#${message.author.discriminator}`, true)
                    .addField(' **Message** ', args)
                    .setThumbnail(message.guild.iconURL)
                    .setColor('#587caf')
                m.send(`${m}`, { embed: bc });
            });
            const AziRo = new Discord.RichEmbed()
                .setAuthor(message.author.username, message.author.avatarURL)
                .setTitle('✔️ | Done ')
                .addBlankField(true)
                .addField('👥 | Message was sent to ', message.guild.memberCount, true)
                .addField('📋| Message ', args)
                .setColor('#587caf')
            message.channel.sendEmbed(AziRo);
        }
    } else {
        return;
    }
});

          client.on('message', message => {
            if(message.content == prefix + 'help') {
              const embed = new Discord.RichEmbed()
              .setColor("#587caf")
              .setAuthor(message.author.username ,message.author.avatarURL)
              .addField('**c-help-en**','**For help in english**')
              .addField('**c-help-ar**','**للهيلب بالعربي**')

              message.channel.sendEmbed(embed)
            }
            
             
            if(message.content == 'c-help-en') {
              
                   message.channel.sendMessage(`
__**Adminstartion Commands**__:
You need permissions to do this commands
**c-kick**: Kick Someone from the server
**c-clear**: Clear the chat
**c-add.r**: Create a role
**c-add.t**: Create a Text Channel
**c-add.v**: Create a Voice Channel
**c-mute**: Mute Someone
**c-unmute**: UnMute Someone
**c-roleadd**: Give Someone a role
**c-roledel**: Remove a role from Someone
**c-autorole**: Change the Autorole

__**Games Commands**__        
**No Games For Now**

__**Enconomie Commands**__
**c-credits**: A balance system
**c-trans**: Transfer your balance to another one
**c-rep**: Give a reputation point to someone
**c-rank**: See your rank in the server
**c-level**: You can get some level by chating
**

__**Other Commands**__
**c-ping**: See how fast the bot connect to servers
**c-member**: To See members status (DND,Online...)
**c-server**: Server info
**c-avatar**: Make the bot send a profile image of Someone
**c-id**: Members Profile
**c-roles**: To see roles in the server
**c-botsg**: Send your Suggstion to Bot Owner <@298732816995319809> 
**c-say**: Repeat what do you say
**c-embed**: Repeat what do you say in embed
**c-draw**: Repeat what do you say in a picture
**c-discrim**: Check who has the same tag that you have in the server
**c-myid**: Send your own ID in a message
__**Support Server**__: https://discord.gg/B24596V
__**Invite me**__: https://goo.gl/8NYBav`)
            }
            
            if(message.content == 'c-help-ar') {
              
                   message.channel.sendMessage(`
__**أوامر أدارية**__:
*قد تحتاج صلاحيا للقيام بهم
**c-kick**: طرد عضو من السيرفر
**c-clear**: حذف المحادثة
**c-add.r**: أنشاء رتبة
**c-add.t**: أنشاء قناة كتابية
**c-add.v**: أنشاء قناة صوتية
**c-mute**: أسكات عضو
**c-unmute**: أزالة الأسكات عن عضو
**c-roleadd**: لمنح ربتة لأحدهم
**c-roledel**: لأزالة رتب’ من احده
**c-autorole**: تغير الرتبة التلقائية

__**أوامر الألعاب**__
**c-فكك**: لعبة تأتيك بعدة كلمات ويطلب منك تحويلها الى احرف
**c-عواصم**: لعبة تعطيك اسماء دول ويطلب منك ان تأتي باسم عاصمتها

__**Other Commands**__
**c-ping**: لرؤية مدى سرعة اتصال البوت في الخوادم الرئيسة
**c-member**:  لرؤية حالة الأعضاء
**c-server**: حالة السيرفر
**c-avatar**: أضهار صورة احدهم عند أدراج اسمه
**c-id**: هوية اللاعب الأفتراضيه
**c-roles**:لرؤية مجموع التب في السيرفر
**c-botsg**: لأرسال اقتراحات او شكاوي ألى صاحب البوت <@298732816995319809> 
**c-say**: يكرر ما تقول
**c-embed**: يكرر ما تقول في مربع النص
**c-draw**: يكرر ما تقول في صورة
**c-discrim**: للتحقق في حال وجود أعضاء بنفس الرمز التعريفي (TAG) في السيرفر
**c-myid**: يرسل الرقم التعريفي الخاص بك في رساله
__**سيرفر الدعم**__: https://discord.gg/B24596V
__**ادعو البوت**__: https://goo.gl/8NYBav`)
            }
            
          });

                  
          client.on('message', message => {
            if(message.content === prefix + "bot") {
              const embed = new Discord.RichEmbed()
              .setColor("#00FFFF")
              .setDescription(`**Servers**🌐 **__${client.guilds.size}__**
          **Users**👥 **__${client.users.size}__**
          **Channels**📚 **__${client.channels.size}__** `)
                   message.channel.sendEmbed(embed).then(message => {message.delete(10000)});
                 }
          });

          client.on('message', message => {
             if(message.content == prefix + 'games') {
                  message.channel.send({embed:
                      {
                          description:"**Games**",
                          color: 0x0099ff,
                          fields: [
                              {
                                  name: "c-games-ar",
                                  value: "قائمة الالعاب",
                              },
                              {
                                  name: "c-games-en",
                                  value: "Games menu",
                              },
                              ],
                         author: {
                             title : message.author.name,
                             icon_url: message.author.avatarUrl,
                         },
                      }
                  })
              }
          });

          client.on('message', message => {
  if (message.author.shyboy_05) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
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
  message.channel.send({
    embed : kickembed
  }).then(message => {message.delete(10000)});
}
});

          client.on('message', message => {
    if (message.content.startsWith(prefix +  "link")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("#587caf")
        .setDescription("| :white_check_mark:  | :heart:  DM...  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("#587caf")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  Here's your invite link
---------------------
-Max usage for this link is 100 uses
---------------------
-Expire after 24 hours
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});

//invite
client.on('message', message => {
  if(message.content === prefix + 'invite') {
    const embed = new Discord.RichEmbed()
        .setColor("#587caf")
        .setTitle('**Invite me by clicking here**')
        .setURL('https://discordapp.com/api/oauth2/authorize?client_id=426353157808062464&permissions=8&scope=bot')
      message.author.sendEmbed(embed)
    message.reply('**Check on DM**').then(message => {message.delete(5000)});
  }
});

//member avatar
client.on('message', message => {
    if (message.content.startsWith(prefix + "avatar")) {
        var men = message.mentions.users.first();
    var user;
      if(men){
          var user = men;
      } else {
          var user = message.author;

      }
        const embed = new Discord.RichEmbed()
        .setColor("#587caf")
        .setImage(`${user.avatarURL}`)
      message.channel.sendEmbed(embed).catch(console.error);
    }
});

//creat role add.r
client.on('message', message => {

  if (message.content.startsWith(prefix + "add.r")) {
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
  });

  client.on('message', message => {
    if(message.content == prefix + 'member') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
  :green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
  :heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
  :yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
  :black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}
  :blue_heart:   all:  ${message.guild.memberCount}**`)
       message.channel.send({embed}).then(message => {message.delete(10000)});

    }
    });

    client.on('message', function(msg) {

   if(msg.content.startsWith (prefix  + 'server')) {
   let embed = new Discord.RichEmbed()
   .setColor("#587caf")
   .setThumbnail(msg.guild.iconURL)
   .setTitle(`Showing Details Of  **${msg.guild.name}*`)
   .addField(':globe_with_meridians:** Server region**',`[** __${msg.guild.region}__ **]`,true)
   .addField(':medal:** __Roles__**',`[** __${msg.guild.roles.size}__ **]`,true)
   .addField(':red_circle:**__ Members__**',`[** __${msg.guild.memberCount}__ **]`,true)
   .addField(':large_blue_circle:**__ Online members__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
   .addField(':pencil:**__ Tc__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
   .addField(':microphone:**__ Vc__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
   .addField(':crown:**__ Ownership__**',`**${msg.guild.owner}**`,true)
   .addField(':id:**__ ID__**',`**${msg.guild.id}**`,true)
   .addField(':date:**__ Created at__**',msg.guild.createdAt.toLocaleString())
   msg.channel.send({embed:embed}).then(message => {message.delete(10000)});
   }
 });

 client.on('message', message => {
   if(!message.author.id === '375761288518828042') return;
           if (message.content.startsWith(prefix + "id")) {
            if(message.author.id === '375761288518828042')
     var args = message.content.split(" ").slice(1);
     let user = message.mentions.users.first();
     var men = message.mentions.users.first();
        var heg;
        if(men) {
            heg = men
        } else {
            heg = message.author
        }
      var mentionned = message.mentions.members.first();
         var h;
        if(mentionned) {
            h = mentionned
        } else {
            h = message.member
        }
               moment.locale('en-TN');
      var id = new  Discord.RichEmbed()
    .setColor("#587caf")
        .setThumbnail(message.author.avatarURL)
        .setAuthor(` ${message.author.username} `, message.author.avatarURL)
      .addField(': Created at', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
    .addField(': Joined the server since', `${moment(h.joinedAt).format('YYYY/M/D HH:mm')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
    .setFooter(`${message.author.username}`, 'https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif')
    message.channel.send(id)
}       });

client.on('message', message => {
    if (message.content === prefix + "roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor("#587caf")
        .addField('Roles:',`**[${roles}]**`)
        message.channel.sendEmbed(embed).then(message => {message.delete(10000)});
    }
})

  
client.on("message", message => {
    var prefix = "c-";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
                if (!message.member.hasPermission("MANGE_MESSAGES"))  return;
 if (!args[1]) {
                                let embed3 = new Discord.RichEmbed()
                                .setDescription("c-clear <number>")
                                .setColor("RANDOM")
                                message.channel.sendEmbed(embed3);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let embed4 = new Discord.RichEmbed()
                                      
                                message.channel.send("``` " + args[1] + " messages has been deleted```")
                                                                                        
                            }
                          }
});


  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'welcome');
    if (!channel) return;
    channel.send(`Welcome to ${member.guild.name}, ${member}`);
    });

    const about = [
    'Developed By xRokz',
    'Check Us (Tornado Support https://discord.gg/unM4V3b)',
    ]
    client.on('message', message => {
          if(!message.author.id === '375761288518828042') return message.reply("انت لست مشترك في البريميوم");
 if(message.author.id === '375761288518828042') return
      if (message.content.startsWith('c-about')) {
        if(!message.channel.guild) return message.reply(' This command only for servers ');
      var client= new Discord.RichEmbed()
      .setTitle("About ME")
      .setColor("#587caf")
      .setDescription(`${about[Math.floor(Math.random() * about.length)]}`)
      .setThumbnail(message.author.avatarURL)
                     .setTimestamp()
      message.channel.sendEmbed(client);
      message.react("??")
      }
      })



client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command ===prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** There is no 'Manage Roles' with you **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mute-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
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
     return message.reply("** Member muted  **").catch(console.error);
  } else {
    message.guild.member(user).addRole(muteRole).then(() => {
      return message.reply("** Muted **").catch(console.error);
    });
  }

};

});

client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === prefix + "unmute") {
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
      return message.reply("** UnMuted  .. **").catch(console.error);
  } else {
    message.guild.member(user).removeRole(muteRole).then(() => {
      return message.reply("** UnMuted **").catch(console.error);
    });
  }

};

});




const moment = require("moment")
    client.on("message", (message) => {
  if (message.content.startsWith(prefix + "add.v")) {
              if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(" `MANAGE_CHANNELS` :laughing::laughing:ليس لديك صلاحية:laughing::laughing: ");
          let args = message.content.split(" ").slice(1);
      message.guild.createChannel(args.join(' '), 'voice');
      message.channel.sendMessage('✅ VC Created').then(message => {message.delete(10000)});

  }
  });

client.on("message", (message) => {
  if (message.content.startsWith(prefix + "add.t")) {
              if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply(" `MANAGE_CHANNELS`:laughing::laughing:ليس لديك صلاحية:laughing::laughing: ");
          let args = message.content.split(" ").slice(1);
      message.guild.createChannel(args.join(' '), 'text');
  message.channel.sendMessage('✅TC Created').then(message => {message.delete(10000)});

  }
  });



    client.on('message', message => {
    ;
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "roleadd") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:You Dont have perms ... **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("I dont have perms... ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**Mention someone!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("Role name !").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('*** Done :white_check_mark:  ***').then(msg => {msg.delete(10000)});
    }
    });

client.on('message', message => {
    var pyrefix = "c-";
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "roledel") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:You Dont have perms ... **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("I dont have perms... ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**Mention someone!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("Role name !").then(msg => {msg.delete(5000)});
    message.guild.member(user).removeRole(message.guild.roles.find("name", MRole));
    message.reply('*** Done :white_check_mark:  ***').then(msg => {msg.delete(10000)});
    }
    });

const prefix2 = "R-";

client.on('message', message => {
if (message.content.startsWith(prefix2 + 'help')) {
    let pages = ['Page1','page2','page3']
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor("#587caf")
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.channel.sendEmbed(embed).then(msg => {

        msg.react('◀').then( r => {
            msg.react('▶')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '◀' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '▶' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 20000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 20000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
            page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  const verifed = ["298732816995319809" ,"227475502766489601"];
if (message.content.startsWith(prefix + 'verify')) {
if( verifed.some(word => message.author.id.includes(word)) ) {    return message.channel.sendMessage(`Accepted you have rights to pass the wall` + `:white_check_mark:`).then(message => {message.delete(10000)});
} else {
   message.reply('Failed to regonize your identy sorry ' + ':x:').then(message => {message.delete(10000)});
}
}
});

client.on('message',function(message) {
                  if(!message.channel.guild) return;

  const prefix = "c-";
                    if (message.content === prefix + "discrim") {
    let messageArray = message.content.split(" ");
    let args = messageArray.slice(1);

    if (message.author.bot) return;

    var discri = args[0]
    let discrim
    if(discri){
    discrim = discri;
    }else{
    discrim = message.author.discriminator;
    }
    if(discrim.length == 1){
        discrim = "000"+discrim
    }
    if(discrim.length == 2){
        discrim = "00"+discrim
    }
    if(discrim.length == 3){
        discrim = "0"+discrim
    }

        const users = client.users.filter(user => user.discriminator === discrim).map(user => user.username);
        return message.channel.send(`
            **Found ${users.length} users with the discriminator #${discrim}**
            ${users.join('\n')}
        `);

/*if(command == "emoji-img"){
        let emojis = msg.guild.emojis
  msg.channel.send({ files: [emoji.url] });
}*/
}
});

client.on('message' , message => {


if (message.author.bot) return;
if (message.content.startsWith(prefix + "botsg")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("298732816995319809").send(
   "  المرسل : " + "**" +
   " " + message.author.tag + "**" +
   "  الرسالة : " + "**" +
   "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription(':mailbox_with_mail: Done')
     .setFooter("Tornado")


message.channel.send(embed);


}

});

client.on('message', message => {
    var prefix = "c-"
    if (message.content.startsWith(prefix + "hack")) {
        if(!message.author.id === '') return;
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);

                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("```**Usage** c-hack {Virus name}```");
                 }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎] 1%').setColor(0xFF0000)})
             }, 1000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎] 2%').setColor(0xFF0000)})
             }, 2000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎] 3%').setColor(0xFF0000)})
             }, 3000)
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎] 4%').setColor(0xFF0000)})
             }, 4000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎] 28%').setColor(0xFF0000)})
             }, 5000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎] 35%').setColor(0xFF0000)})
             }, 6000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎] 78%').setColor(0xFF0000)})
             }, 7000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎‎‎‎‎‎‎‎‎‎‎] 80%').setColor(0xFF0000)})
             }, 8000)
               setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎‎‎‎‎‎‎‎] 86%').setColor(0xFF0000)})
             }, 9000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎‎‎‎‎‎‎] 89%').setColor(0xFF0000)})
             }, 10000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎‎‎‎‎‎] 90%').setColor(0xFF0000)})
             }, 11000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎‎‎‎] 95%').setColor(0xFF0000)})
             }, 12000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎‎‎] 96%').setColor(0xFF0000)})
             }, 13000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎‎] 97%').setColor(0xFF0000)})
             }, 14000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎‎] 98%').setColor(0xFF0000)})
             }, 15000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎‎] 99%').setColor(0xFF0000)})
             }, 16000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle(' Downloading [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓‎] 100%').setColor(0xFF0000)})
             }, 17000)
                setTimeout(function() {
               m.delete()
           }, 32000)
             setTimeout(function() {
               message.channel.send({embed:{description:"**" + args + ".bat Downloaded**"}})
           }, 33000)
           });
         }
 })


client.on('message', message => {
  if(message.author.bot) return;
    let args = message.content.split(" ").slice(1).join(" ")
    if (message.content.startsWith(prefix + 'embed')) {
        if(!args) { return  message.channel.send({embed:{description:"**Uesage** `c-embed {something}`"}});

        } else {
            message.channel.send({embed:{description:args}})
        }
    }
});

client.on('guildMembedAdd', (member, invite) => {
    let channel = member.guild.channels.get("423936436572651534")
    if (!channel) {return;}
    channel.send(`invite ${invite.inviter} `)
});

// Events //

// لوق دخول اللاعبين
client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;

    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';

    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
     .setThumbnail(memberavatar)
       .setColor('#587caf')
       .setDescription(`📥 <@${member.user.id}> **Joined the server**\n\n **Created:** \n \`${fromNow} ${isNew}\``)
       .setTimestamp();
     channel.send({embed:embed});
});
// لوق خروج اللاعبين
client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;

    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();

    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
     .setThumbnail(memberavatar)
       .setColor('#587caf')
       .setDescription(`📤 <@${member.user.id}> **left the server**\n\n **Had joined:** \n \`${fromNow}\``)
       .setTimestamp();
     channel.send({embed:embed});
});

// لوق الرسائل المنحذفه
client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;

    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('#587caf')
       .setDescription(`🗑️ **Message sent by <@${message.author.id}> deleted in** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});

});

// لوق تعديل الرسائل
client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;

    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('#587caf')
       .setDescription(`✏ **Message sent by <@${message.author.id}> edited in** <#${message.channel.id}>\n\nOld:\n \`${message.cleanContent}\`\n\nNew:\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});

});

client.on('guildMemberRemove', member => {
    const guild = member.guild;
    const channel = member.guild.channels.find('name', 'welcome');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
     .setThumbnail(memberavatar)
       .setColor('#587caf')
       .setDescription(`📤 <@${member.user.id}> **left the server**\n`)
       .addField('**Now we are**',member.guild.memberCount)
    .setTimestamp();
     channel.send({embed:embed});
});
          
client.on('guildMemberAdd', member => {
    const guild = member.guild;
    const channel = member.guild.channels.find('name', 'welcome');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
     .setThumbnail(memberavatar)
       .setColor('#587caf')
       .setDescription(`:inbox_tray:  <@${member.user.id}> **Joined the server**\n`)
       .addField('**Now we are**',member.guild.memberCount)
    .setTimestamp();
     channel.send({embed:embed});
});

client.on('message', message => {
  if(message.author.bot) return;
    let args = message.content.split(" ").slice(1).join(" ")
    if (message.content.startsWith(prefix + 'say')) {
        if(!args) { return  message.channel.send({embed:{description:"**Uesage** `c-say {something}`"}});

        } else {
            message.channel.send(args)
        }
    }
});

client.on('guildMemberAdd', member => {
  let channel = member.guild.channels.find("name","welcome")
    var Canvas = require('canvas')
  , Image = Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';

var back = new Image;
back.src='https://cdn.discordapp.com/attachments/426363220073381888/441583088913350666/image.png';

    console.log(back);
     ctx.drawImage(back, 0,0, canvas.width,canvas.height);

ctx.font = '35px Aeland';
                        ctx.fontSize = '40px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(" Welcome to " + member.guild.name , 440, 25);

                        //ur name
                        ctx.font = '40px Impact';
                        ctx.fontSize = '48px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(member.user.username, 420, 100);

                         ctx.font = '30px Impact';
                        ctx.fontSize = '20px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText("Member No." + member.guild.memberCount, 410, 170);


                        //Avatar
                        let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.beginPath();
                              ctx.arc(115, 100, 90, 0, Math.PI*2);
                                 ctx.closePath();
                                 ctx.clip();
                                 ctx.drawImage(ava, 5, 5, 200, 200);
        





ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

channel.sendFile(canvas.toBuffer());

});



    client.on('message', message => {
      if(message.author.bot) return;
        let args = message.content.split(' ').slice(1).join(' ')
        if (message.content.startsWith(prefix + 'draw')) {
            if (!args) return message.channel.send({embed:{description:"**Usage `c-draw {something}`**"}})
var Canvas = require('canvas')

const w = ['./bluce.png','./grayd.png','./imagfdse.png'];
        let Image = Canvas.Image,
            canvas = new Canvas(401, 202),
            ctx = canvas.getContext('2d');
        ctx.patternQuality = 'bilinear';
        ctx.filter = 'bilinear';
        ctx.antialias = 'subpixel';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 2;
        ctx.stroke();
        ctx.beginPath();

        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 749, 198);

})

                                                //wl
                        ctx.font = '35px Aeland Bold';
                        ctx.fontSize = '40px';
                        ctx.fillStyle = "#FFFFFF";
                        ctx.textAlign = "center";
                        ctx.fillText(args, 200.5, 101);

        message.channel.sendFile(canvas.toBuffer())






        }
        {

        }

    });

    const arraySort = require('array-sort'),
      table = require('table');

client.on('message' , async (message) => {

    if(message.content.startsWith(prefix + "top")) {

  let invites = await message.guild.fetchInvites();

    invites = invites.array();

    arraySort(invites, 'uses', { reverse: true });

    let possibleInvites = [['User', 'Uses']];
    invites.forEach(i => {
      possibleInvites.push([i.inviter.username , i.uses]);
    })
    const embed = new Discord.RichEmbed()
    .setColor(0x7289da)
    .setTitle("Invites")
    .addField(' Top !' , `\`\`\`${table.table(possibleInvites)}\`\`\``)

    message.channel.send(embed)
    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "bans")) {
        message.guild.fetchBans()
        .then(bans => message.channel.send('The server has banned ' + `${bans.size}` + ' Person'))
  .catch(console.error);
}
});

client.on('message', message => {
    if (message.content.startsWith(prefix + "status")) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setColor('#4d6ea3')
            .setTitle('Stats Bot / Info ')
            .addField('``Uptime``', timeCon(process.uptime()), true)
            .addField('``Ping Is``' , `${Date.now() - message.createdTimestamp}` + '``Ms``', true)
            .addField('``RAM Usage``', `${(process.memoryUsage().rss / 1048576).toFixed()}MB`, true)
            .addField('``Guild Count``', client.guilds.size, true)
            .addField('``Bot In channel``' , `${client.channels.size}` , true)
            .addField('``Users rout``' ,`${client.users.size}` , true)
            .addField('``Name Bot Or tag``' , `${client.user.tag}` , true)
            .addField('``Bot Id``' , `${client.user.id}` , true)
            .setFooter('Tornado / TB Team')
    })
}
});


function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
}











 


client.on('message', message => {                      
if(!message.channel.guild) return;
   if(message.content.startsWith(prefix + 'colors')) {
   if(!message.channel.guild) return message.channel.send('**Only Servers!**').then(m => m.delete(5000));
   message.channel.send('Choose  Color:').then(msg => {
   msg.react('❤')
   .then(() => msg.react('💚'))
   .then(() => msg.react('💜'))
   .then(() => msg.react('💛'))
   .then(() => msg.react('🖤'))
   .then(() => msg.react('💙'))
   .then(() => msg.react('❌'))
 
 
   let redFilter = (reaction, user) => reaction.emoji.name === '❤' && user.id === message.author.id;
   let greenFilter = (reaction, user) => reaction.emoji.name === '💚' && user.id === message.author.id;
   let purpleFilter = (reaction, user) => reaction.emoji.name === '💜' && user.id === message.author.id;
   let yellowFilter = (reaction, user) => reaction.emoji.name === '💛' && user.id === message.author.id;
   let blackFilter = (reaction, user) => reaction.emoji.name === '🖤' && user.id === message.author.id;
   let blueFilter = (reaction, user) => reaction.emoji.name === '💙' && user.id === message.author.id;
   let nooneFilter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
 
   let red = msg.createReactionCollector(redFilter, { time: 15000 });
   let green = msg.createReactionCollector(greenFilter, { time: 15000 });
   let purple = msg.createReactionCollector(purpleFilter, { time: 15000 });
   let yellow = msg.createReactionCollector(yellowFilter, { time: 15000 });
   let black = msg.createReactionCollector(blackFilter, { time: 15000 });
   let blue = msg.createReactionCollector(blueFilter, { time: 15000 });
   let noone = msg.createReactionCollector(nooneFilter, { time: 15000 });
 
   red.on("collect", r => {
       message.member.addRole(message.guild.roles.find("name", "red"));
       message.member.removeRole(message.guild.roles.find("name", "black"));
       message.member.removeRole(message.guild.roles.find("name", "yellow"));
       message.member.removeRole(message.guild.roles.find("name", "purple"));
       message.member.removeRole(message.guild.roles.find("name", "green"));
       message.member.removeRole(message.guild.roles.find("name", "blue"));
       msg.delete();
       message.channel.send(`**Your Color now is __**Red**__**`).then(m => m.delete(5000));
 
       })
     
       green.on("collect", r => {
           message.member.addRole(message.guild.roles.find("name", "green"));
           message.member.removeRole(message.guild.roles.find("name", "black"));
           message.member.removeRole(message.guild.roles.find("name", "yellow"));
           message.member.removeRole(message.guild.roles.find("name", "purple"));
           message.member.removeRole(message.guild.roles.find("name", "red"));
           message.member.removeRole(message.guild.roles.find("name", "blue"));
           msg.delete();
           message.channel.send(`**Your Color now is __**Green**__**`).then(m => m.delete(5000));
 
           })
         
           purple.on("collect", r => {
               message.member.addRole(message.guild.roles.find("name", "purple"));
               message.member.removeRole(message.guild.roles.find("name", "black"));
               message.member.removeRole(message.guild.roles.find("name", "yellow"));
               message.member.removeRole(message.guild.roles.find("name", "green"));
               message.member.removeRole(message.guild.roles.find("name", "red"));
               message.member.removeRole(message.guild.roles.find("name", "blue"));
               msg.delete();
               message.channel.send(`**Your Color now is __**Purple**__**`).then(m => m.delete(1000));
 
               })
             
               yellow.on("collect", r => {
                   message.member.addRole(message.guild.roles.find("name", "yellow"));
                   message.member.removeRole(message.guild.roles.find("name", "black"));
                   message.member.removeRole(message.guild.roles.find("name", "purple"));
                   message.member.removeRole(message.guild.roles.find("name", "green"));
                   message.member.removeRole(message.guild.roles.find("name", "red"));
                   message.member.removeRole(message.guild.roles.find("name", "blue"));
                   msg.delete();
                   message.channel.send(`**Your Color now is __**Yellow**__**`).then(m => m.delete(1000));
 
                   })
                 
                   black.on("collect", r => {
                       message.member.addRole(message.guild.roles.find("name", "black"));
                       message.member.removeRole(message.guild.roles.find("name", "yellow"));
                       message.member.removeRole(message.guild.roles.find("name", "purple"));
                       message.member.removeRole(message.guild.roles.find("name", "green"));
                       message.member.removeRole(message.guild.roles.find("name", "red"));
                       message.member.removeRole(message.guild.roles.find("name", "blue"));
                       msg.delete();
                       message.channel.send(`**Your Color now is __**Black**__**`).then(m => m.delete(1000));
 
                       })
                       noone.on("collect", r => {
                           message.member.removeRole(message.guild.roles.find("name", "yellow"));
                           message.member.removeRole(message.guild.roles.find("name", "purple"));
                           message.member.removeRole(message.guild.roles.find("name", "green"));
                           message.member.removeRole(message.guild.roles.find("name", "red"));
                           message.member.removeRole(message.guild.roles.find("name", "blue"));
                           message.member.removeRole(message.guild.roles.find("name", "black"));
                           msg.delete();
                           message.channel.send(`**Your Colors Rested**`).then(m => m.delete(1000));
 
                           })                                                          
                           blue.on("collect", r => {
                               message.member.addRole(message.guild.roles.find("name", "blue"));
                               message.member.removeRole(message.guild.roles.find("name", "yellow"));
                               message.member.removeRole(message.guild.roles.find("name", "purple"));
                               message.member.removeRole(message.guild.roles.find("name", "green"));
                               message.member.removeRole(message.guild.roles.find("name", "red"));
                               message.member.removeRole(message.guild.roles.find("name", "black"));
                               msg.delete();
                               message.channel.send(`**Your Color now is __**Blue**__**`).then(m => m.delete(1000));
 
 
                               })
                               })
                               }
                               });


 
	

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "372039831498260490") return;



if (message.content.startsWith(prefix + 'setstream')) {
  client.user.setGame(argresult, "https://www.twitch.tv/darkknite55");
	 console.log('test' + argresult);
    message.channel.sendMessage(`Streaming: **${argresult}`)
} 

if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
	  message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 
if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}
});

  var UserBlocked = new Set(); // create a new set to save users id.


var aoasm =[
    {q:"ما عاصمة **افغانستان**",a:"كبل"},
    {q:"ما عاصمة ** البانيا**",a:"تيران"},
    {q:"ما عاصمة **الجزائر **",a:"الجزائر"},
    {q:"ما عاصمة ** **",a:"الجزائر"},
    {q:"ما عاصمة **اندورا لا فيلا **",a:"اندورا"},
    {q:"ما عاصمة **انجولا**",a:"لواندا"},
    {q:"ما عاصمة **انتيجوا وباربودا**",a:"سان جونز"},
    {q:"ما عاصمة **الارجنتين**",a:"بوينس ايرس"},
    {q:"ما عاصمة **ارمينيا**",a:"يريفان"},
    {q:"ما عاصمة ** مصر**",a:"القاهرة"},
    {q:"ما عاصمة ** استراليا**",a:"كانبرا"},
    {q:"ما عاصمة **النمسا**",a:"فيينا"},
    {q:"ما عاصمة ** اذربيجان**",a:"باكو"},
    {q:"ما عاصمة **جزر البهاما**",a:"ناساو"},
    {q:"ما عاصمة **البحرين**",a:"المنامة"},
    {q:"ما عاصمة ** بنجلاديش**",a:"دكـا"},
    {q:"ما عاصمة **باربادوس **",a:"بريدجتاون"},
    {q:"ما عاصمة **بيلا روسيا**",a:"مينسك"},
    {q:"ما عاصمة ** بلجيكا**",a:"بروكسل"},
    {q:"ما عاصمة ** بيليز**",a:"بلوم بان"},
    {q:"ما عاصمة ** بنين**",a:"بورتو نوفو"},
    {q:"ما عاصمة ** بوتان**",a:"ثيمفو"},
    {q:"ما عاصمة **بوليفيا **",a:"لاباز"},
    {q:"ما عاصمة ** البوسنة والهرسك**",a:"سراييفو"},
    {q:"ما عاصمة ** بوتسوانا**",a:"جابورون"},
    {q:"ما عاصمة ** البرازيل**",a:"برازيليا"},
    {q:"ما عاصمة ** بروناى**",a:"بندر سرى بيجاوان"},
    {q:"ما عاصمة ** بلغاريا**",a:"صوفيا"},
    {q:"ما عاصمة ** بوركينا فاسو**",a:"واجادوجو"},
    {q:"ما عاصمة **بوروندى **",a:"بوجومبورا"},
    {q:"ما عاصمة **كمبوديا **",a:"بنوم بنـه"},
    {q:"ما عاصمة ** الكاميرون**",a:"ياوندى"},
    {q:"ما عاصمة ** كندا**",a:"اوتاوا"},
    {q:"ما عاصمة ** الرأس الاخضر**",a:"برايا"},
    {q:"ما عاصمة **تشاد **",a:"نجامينا"},
    {q:"ما عاصمة ** شيلى**",a:"سانتياجو"},
    {q:"ما عاصمة **الصين **",a:"بكين"},
    {q:"ما عاصمة ** **",a:"مورونى"},
    {q:"ما عاصمة **كوستاريكا **",a:"سان خوسيه"},
    {q:"ما عاصمة ** كوت ديفوار**",a:"ابيدجان"},
    {q:"ما عاصمة **كرواتيا **",a:"زغرب"},
    {q:"ما عاصمة ** كوبا**",a:"هافانا"},
    {q:"ما عاصمة ** قبرص**",a:" "},
    {q:"ما عاصمة ** جمهورية التشيك**",a:"براغ"},
    {q:"ما عاصمة **الدنمارك **",a:"كوبنهاجن"},
    {q:"ما عاصمة ** جيبوتى**",a:"جيبوتى"},
    {q:"ما عاصمة ** دومينيكا**",a:"روسيو"},
    {q:"ما عاصمة **الدومينيكان **",a:"سان دومينجو"},
    {q:"ما عاصمة **تيمور الشرقية **",a:"ديلى"},
    {q:"ما عاصمة **قطر  **",a:"الدوحة"},
    {q:"ما عاصمة **السعودية  **",a:"الرياض"},
    {q:"ما عاصمة **سوريا  **",a:"دمشق"},
    {q:"ما عاصمة **تركيا  **",a:"انقرة"},
    {q:"ما عاصمة **العراق  **",a:"بغداد"},
    {q:"ما عاصمة **البنان  **",a:"بيروت"},
    {q:"ما عاصمة **فلسطين  **",a:"القدس"},
    {q:"ما عاصمة **امريكا  **",a:"واشنطن"},
    {q:"ما عاصمة **الاردن  **",a:"عمان"},    
    {q:"ما عاصمة **السودان  **",a:"خرطوم"},
    {q:"ما عاصمة **المانيا  **",a:"برلين"},
    {q:"ما عاصمة **كندا  **",a:"اوتاوا"},
    {q:"ما عاصمة **البرازيل  **",a:"برازيليا"},
    
    
    
   ];
   client.on("message", async message => {
    if(message.content == prefix+"عواصم"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
        UserBlocked.add(message.guild.id)
        var ask = aoasm[Math.floor(Math.random() * aoasm.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('سؤال عواصم')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription(ask.q);
        message.channel.sendEmbed(embed).then(msg=> msg.delete(20000))
        const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:10000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "عاصمة") return
           if(result.content == ask.a){

             let embeds = new Discord.RichEmbed()
             .setTitle(':white_check_mark: اجابة صحيحة')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** الإجابة صحيحة`);
                message.channel.sendEmbed(embeds);                return;
           } else {

                                  var embedx = new Discord.RichEmbed()
                .setTitle(':x:خطاء')
                .setAuthor(message.author.username, message.author.avatarURL)
                .setColor("RANDOM")
                .setDescription(`**${result.author.username}** الإجابة خاطئة`);
                message.channel.sendEmbed(embedx);
           }
     });
  }
});


var fkk =[
        {f:" بسم الله الرحمن الرحيم",k:"ب س م ا ل ل ه ا ل ر ح م ن ا ل ر ح ي م"},
        {f:" باص",k:"ب ا ص"},
        {f:" عربة ",k:"ع ر ب ة"},
        {f:" سيارة",k:"س ي ا ر ة"},
        {f:" سيرفرنا احلى سيرفر",k:"س ي ر ف ر ن ا ا ح ل ى س ي ر ف ر"},
        {f:" العنود ",k:"ا ل ع ن و د"},
        {f:" المستتكعكبتيه",k:"ا ل م س ت ت ك ع ك ب ت ي ه"},
        {f:" دحوم",k:"د ح و م"},
        {f:" اونرنا احلى اونر",k:"ا و ن ر ن ا ا ح ل ى ا و ن ر"},
        {f:" الحياة حلوة",k:"ا ل ح ي ا ة ح ل و ة"},
        {f:" كازخستان ",k:"ك ا ز خ س ت ا ن"},
        {f:"لحم الحمام حلال ولحم الحمار حرام ",k:"ل ح م ا ل ح م ا م ح ل ا ل و ل ح م ا ل ح م ا ر ح ر ا م"},
        {f:" استونيا ",k:"ا س ت و ن ي ا"},
        {f:" لقمة وجغمه ",k:"ل ق م ة و ج غ م ه"},
        {f:" زنديق  ",k:"ز ن د ي ق"},
        {f:" استراليا ",k:"ا س ت ر ا ل ي ا"},
        {f:" سوريا ",k:"س و ر ي ا"},
        {f:" الاردن ",k:"ا ل ا ر د ن"},
        {f:" طماطم ",k:"ط م ا ط م"},
        {f:" سارة ",k:"س ا ر ة"},
        {f:" دراجون ",k:"د ر ا ج و ن"},
        {f:" سيرفر ",k:"س ي ر ف ر"},
        {n:" الجبل",m:"ا ل ج ب ل"},
        {n:" هضبة",m:"ه ض ب ة"},
        {n:" خواطر",m:"خ و ا ط ر"},
        {n:" ارحبو",m:"ا ر ح ب و"},
        {n:" اطنخ سيرفر",m:"ا ط ن خ س ي ف ر"},
        {n:" احبك",m:"ا ح ب ك"},
        {n:" سبرايز",m:"س ب ر ا ي ز"},
        {n:" ولي على أمتك",m:"و ل ي ع ل ى أ م ت ك"},



   ];


   client.on("message", async message => {
    if(message.content == prefix+"فكك"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
        UserBlocked.add(message.guild.id)
        var ask = fkk[Math.floor(Math.random() * fkk.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('لعبة فكك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription(ask.f);
        message.channel.sendEmbed(embed).then(msg=> msg.delete(200000))
        const msgs = await message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:100000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "فكك") return
           if(result.content == ask.k){

             let embeds = new Discord.RichEmbed()
             .setTitle(':white_check_mark: اجابة صحيحة')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** الإجابة صحيحة`);
                message.channel.sendEmbed(embeds);                return;
           } else {

                               var embedx = new Discord.RichEmbed()
             .setTitle(':x:خطاء')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** الإجابة خاطئة`);

                message.channel.sendEmbed(embedx);
           }
     });
  }
});         

var math =[
    {q:"**2*4**",a:"8"},
    {q:" **1+1**",a:"2"},
    {q:"ما عاصمة **الجزائر **",a:"الجزائر"},
    {q:"ما عاصمة ** **",a:"الجزائر"},
    {q:"ما عاصمة **اندورا لا فيلا **",a:"اندورا"},
    {q:"ما عاصمة **انجولا**",a:"لواندا"},
    {q:"ما عاصمة **انتيجوا وباربودا**",a:"سان جونز"},
    {q:"ما عاصمة **الارجنتين**",a:"بوينس ايرس"},
    {q:"ما عاصمة **ارمينيا**",a:"يريفان"},
    {q:"ما عاصمة ** مصر**",a:"القاهرة"},
    {q:"ما عاصمة ** استراليا**",a:"كانبرا"},
    {q:"ما عاصمة **النمسا**",a:"فيينا"},
    {q:"ما عاصمة ** اذربيجان**",a:"باكو"},
    {q:"ما عاصمة **جزر البهاما**",a:"ناساو"},
    {q:"ما عاصمة **البحرين**",a:"المنامة"},
    {q:"ما عاصمة ** بنجلاديش**",a:"دكـا"},
    {q:"ما عاصمة **باربادوس **",a:"بريدجتاون"},
    {q:"ما عاصمة **بيلا روسيا**",a:"مينسك"},
    {q:"ما عاصمة ** بلجيكا**",a:"بروكسل"},
    {q:"ما عاصمة ** بيليز**",a:"بلوم بان"},
 ]
  
client.on('message', message => {
    if(message.content == prefix+"math"){
        if(UserBlocked.has(message.guild.id)) return message.channel.send("هناك جلسة .")
        UserBlocked.add(message.guild.id)
        var ask = fkk[Math.floor(Math.random() * math.length)];
        let embed = new Discord.RichEmbed()
        .setTitle('لعبة فكك')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setColor("RANDOM")
        .setDescription(ask.f);
        message.channel.sendEmbed(embed).then(msg=> msg.delete(200000))
        const msgs = message.channel.awaitMessages(msg => msg.author.id !== client.user.id ,{maxMatches:1,time:100000});
            UserBlocked.delete(message.guild.id)
        msgs.forEach(result => {
           if(result.author.id == client.user.id) return;
           if(result.content == "فكك") return
           if(result.content == ask.k){

             let embeds = new Discord.RichEmbed()
             .setTitle(':white_check_mark: اجابة صحيحة')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** الإجابة صحيحة`);
                message.channel.sendEmbed(embeds);                return;
           } else {

                               var embedx = new Discord.RichEmbed()
             .setTitle(':x:خطاء')
             .setAuthor(message.author.username, message.author.avatarURL)
             .setColor("RANDOM")
             .setDescription(`**${result.author.username}** الإجابة خاطئة`);

                message.channel.sendEmbed(embedx);
           }
     });
  }
});         

const userData = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
var Canvas = require('canvas')
const pretty = require("pretty-ms")
var jimp = require('jimp')
const rn = require('random-number');
let done = {};


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

////////////RANK

client.on("message", function(message){
if (message.content.startsWith(prefix + "info")) {
	if (!userData[message.author.id]) {
		userData[message.author.id] = {Money:0,Xp:0,Level:0}
	}
     var mentionned = message.mentions.users.first();

      var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
	fs.writeFile("./userData.json",JSON.stringify(userData), function(err){
		if (err) console.log(err);
	})
	var CulLevel = Math.floor(0.25 * Math.sqrt(userData[message.author.id].Xp +1));
	if (CulLevel > userData[message.author.id].Level) {userData[message.author.id].Level +=CulLevel}
	let pEmbed = new Discord.RichEmbed()
	.setColor("Random")
	.addField("Name:", message.author.tag)
	.addField("Level:", userData[message.author.id].Level)
	.addField("Xp:",Math.floor(userData[message.author.id].Xp))
	.addField("Money:",Math.floor(userData[x5bzm.id].money))
	message.channel.send(pEmbed);
}
if (!userData[message.author.id]) {
	userData[message.author.id] = {Money:0,Xp:0,Level:0,Like:0}
	}

	fs.writeFile("./userData.json",JSON.stringify(userData), function(err){
		if (err) console.log(err);
	})
userData[message.author.id].Xp+= 0.25;
userData[message.author.id].Money+= 0.25;

});

////////////LEVEL

 let points = JSON.parse(fs.readFileSync("./level.json", "utf8"));
 client.on("message", message => {
   if (!message.content.startsWith(prefix)) return;
   if (message.author.bot) return;

   if (!points[message.author.id]) points[message.author.id] = {
     points: 0,
     level: 0
   };
   let userData = points[message.author.id];
   userData.points++;
 
   let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
   if (curLevel > userData.level) {
     // Level up message
     userData.level = curLevel;
     message.channel.send(`**:up: | ${message.author.username} You leveled up to ${curLevel}**`);
   }
   if (message.content.startsWith(prefix + "level")) {
     message.channel.send(`**${message.author.username} You are level is ${userData.level}**`);
   }
   fs.writeFile("./level.json", JSON.stringify(points), (err) => {
     if (err) console.error(err)
   });
 
 });

////////////REP

let rep = JSON.parse(fs.readFileSync("./rep.json", "utf8"));
client.on('message', message => { 
    if(!rep[message.author.id]) rep[message.author.id] = {
        reps: 'NOT YET',
        repo: 0,
    }
    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('ar');
        let ment = message.mentions.users.first();
       var getvalueof;
       if(ment) {
           getvalueof = ment;
    } else {
           getvalueof = message.author;
    }
    if(rep[message.author.id].reps != moment().format('L')) {
            rep[message.author.id].reps = moment().format('L');
            rep[getvalueof.id].repo += 1; // يضيف واحد كل مره يستخدم الامر
            message.channel.send(`** :white_check_mark: Successfly Added rep To ${getvalueof} **`)
        } else {
           message.channel.send(`** You Do it Befor \' Pls Try Agin After:`  + moment().endOf('day').fromNow().replace('in ', 'بعد ') + '**')
        }
       }
    fs.writeFile('./rep.json', JSON.stringify(rep), (err) => {
     if(err) throw err.message + ' '+err.file;
 })
});

////////////PROFILE

client.on("message",  message => {
     var mentionned = message.mentions.users.first();
      var z;
      if(mentionned){
          var z = mentionned;
      } else {
          var z = message.author;
          
      }
     let ment = message.mentions.users.first();
       var getvalueof;
       if(ment) {
           getvalueof = ment;
    } else {
           getvalueof = message.author;
    }
    if(message.author.bot) return;
    if(message.channel.type ==="dm") return;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);
    let msg = message.content.toUpperCase();
    if(!command.startsWith(prefix)) return;
    
    var jimp = require('jimp')
    const w = ['./background.png',];
    if(command === prefix + 'procfile') {
    let Canvas = require('canvas')
    let canvas = new Canvas(500, 500)

    let ctxx = canvas.getContext('3d')
    let Images = Canvas.Image
    fs.readFile('https://cdn.glitch.com/b6170765-1bf9-4bab-95fd-e30a3bcfd874%2Fimage.png?1524742838158', function(err, picture) { 
      if (err) throw err
      var img = new Images
      img.onload = () => {
        ctx.drawImage(img, 5, 5, 500, 500) 
      }
      img.src = picture
    })
     
    let ctx = canvas.getContext('2d')
    let Image = Canvas.Image
    fs.readFile('assets/image.png', function(err, picture) { 
    if (err) throw err
    var img = new Image
    img.onload = () => {
    ctx.drawImage(img, 0, 0, 500, 500) 
      }
      img.src = picture
    })
   
                      let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
	                //XP
			ctx.font = '22px Cairo';
			ctx.fillStyle = '#020202';
			ctx.fillText(`Total XP : ${Math.floor(userData[z.id].Xp)}`,  110,467);
	                //MONEY
			ctx.font = '24px Cairo';
			ctx.fillStyle = '#020202';
			ctx.fillText(`Credits : ${Math.floor(userData[z.id].money)}`,  220,360);
                        //USERNAME
                   	ctx.font = '25px Cairo';
			ctx.fillStyle = '#020202';
                        ctx.fillText(`${z.username}`, 215, 170)
                        //LEVEL
			ctx.font = '30px Cairo';
			ctx.textAlign = 'left';
			ctx.fillStyle = '#020202';
			ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
			ctx.fillText(`${userData[z.id].level}`, 90, 310);
		        //info Box :)
                        ctx.font = '25px Cairo';
                        ctx.textAlign = 'left';
			ctx.fillStyle = '#020202';
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
                        ctx.fillText(`${userData[z.id].text}`,265 , 270)
                        //LIKE
                        ctx.font = '25px Cairo';
                        ctx.textAlign = 'Center';
                        ctx.fillStyle = '#020202';
                        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
                        ctx.fillText(`❤${rep[message.author.id].repo}`, 80,395);
			//AVATAR
                        let Avatar = Canvas.Image;
                        let ava = new Avatar;
                        ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(98, 144, 84, 0, Math.PI*2, true); 
                        ctx.closePath();
                        ctx.clip();
                        ctx.drawImage(ava, 13, 60, 175, 175);

    setTimeout(function() {
      fs.readFile('assets/image.png', function(err, picture) {
        if (err) throw err
        var img = new Image
        img.onload = () => {
          ctx.drawImage(img, -1, -1, 0, 0)
        }
        img.src = picture
        let inventoryPicture = canvas.toDataURL()
        let data = inventoryPicture.replace(/^data:image\/\w+;base64,/, "")
        let buf = new Buffer(data, 'base64')
        fs.writeFile(`images.png`, buf)
        message.channel.send(`**:pencil: | Showing your Profile ${message.author.username}**`, {
          file: `images.png` // Or replace with FileOptions object
        })
      })
    }, 1000)

    function roundedImage(x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }

    function wrapText(context, text, x, y, maxWidth, lineHeight) {

      var words = text.split(' '),
        line = '',
        lineCount = 0,
        i,
        test,
        metrics;

      for (i = 0; i < words.length; i++) {
        test = words[i];
        metrics = context.measureText(test);
        while (metrics.width > maxWidth) {
          // Determine how much of the word will fit
          test = test.substring(0, test.length - 1);
          metrics = context.measureText(test);
        }
        if (words[i] != test) {
          words.splice(i + 1, 0, words[i].substr(test.length))
          words[i] = test;
        }

        test = line + words[i] + ' ';
        metrics = context.measureText(test);

        if (metrics.width > maxWidth && i > 0) {
          context.fillText(line, x, y);
          line = words[i] + ' ';
          y += lineHeight;
          lineCount++;
        } else {
          line = test;
        }
      }
      ctx.fillText(line, x, y);
    }
      })
      })
      }
  if(message.content.startsWith(prefix + 'profile')) {
    let user = message.author
     const embed = new Discord.RichEmbed()
    .setColor('AQUA')
  .setThumbnail(user.avataraurl)
  .setTitle(user.username + '‘s Profile')
  .addField('**Name👥**', user.username)
  .addField('**Rep❤**', `${rep[user.id].repo}`,true)
  .addField('**Level**', `${userData[z.id].level}`,true)
  .addField('**Credits :credit_card:**', `${Math.floor(userData[z.id].money)}`,true)
  .addField('**Infoℹ**', `${userData[z.id].text}`)
     .setFooter('This profile is temporary until finish from working to better one')
            message.channel.sendEmbed(embed)

  }
      });




client.on('message', message => {
if (message.author.bot) return null;
let sender = message.author;
let msg = message.content.toUpperCase();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 200;
if (!userData[sender.id].lastDaily) userData[sender.id].lastDaily = 'Not Collected';
if (!userData[sender.id].messages) userData[sender.id].messages = 1;
if (!userData[sender.id].level) userData[sender.id].level = 1;
if (!userData[sender.id].like) userData[sender.id].like = 1;
if (!userData[sender.id].text) userData[sender.id].text = `${prefix}setinfo to set.`

if(message.content.startsWith(prefix + 'credit')) {
 var mentionned = message.mentions.users.first();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 0;
fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})
        
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }

      var mando = message.mentions.users.id;
      if  (!userData[x5bzm.id]) userData[x5bzm.id] = {}
      if (!userData[x5bzm.id].money) userData[x5bzm.id].money = 0;
      message.channel.send("**:credit_card:  | **" + '`' + x5bzm.username + '`' + "** , your credit is :yen: **" + '`' + userData[x5bzm.id].money + '`' + "** credits!**")
}


let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(1);
if(message.content.startsWith(prefix + 'trans')) {
          if (!args[0]) {
            message.channel.send(`**Usage:** c-trans <amount> <@mention>`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage**: c-trans <amount> <@mention` );
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
            let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage:** c-trans <amount> <@mention>`);
            var mentionned = message.mentions.users.first();
if (!userData[sender.id]) userData[sender.id] = {}
if (!userData[sender.id].money) userData[sender.id].money = 200;
fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})
      var mando = message.mentions.users.id;
      if  (!userData[defineduser.id]) userData[defineduser.id] = {}
      if (!userData[defineduser.id].money) userData[defineduser.id].money = 200;
      userData[defineduser.id].money += (+args[0]);
      userData[sender.id].money += (-args[0]);
      let mariam = message.author.username
message.channel.send('`' + mariam + '`' + '** send to **'+ '`' + mentionned.username + '`' + '**a credits **'+ (args[0]) + '** :dollar: balance **')
}

if(message.content.startsWith(prefix + 'daily')) {
if (userData[sender.id].lastDaily != moment().format('6800000')) {
    userData[sender.id].lastDaily = moment().format('6800000')
    userData[sender.id].money += 200; 
    message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
} else {
    message.channel.send('**your next Daily :moneybag: : ' + moment().endOf('6800000').fromNow()  + '.**')
}
}
fs.writeFile('./userData.json', JSON.stringify(userData), (err) => {
if (err) console.error(err);
})

if(message.content.startsWith(prefix + 'setinfo')) {
if (!userData[message.author.id].text) userData[message.author.id].text = 'info:';
var mard = userData[message.author.id].text
let args = message.content.split(' ').slice(1).join(' ');
if (!args) return message.channel.send('**Usage:**: c-setinfo <something>')
userData[message.author.id].text = args ;
message.channel.send(':ballot_box_with_check:**Your info was changed to \`' + args + '`\**')
}
}
)




var googl = require('goo.gl');

googl.setKey('AIzaSyC9MdpZYw0ELyRQuAhz4ycYJnBUgE0BEDc');
 
googl.getKey();
 
client.on('ready', () => {
    console.log('ready');
}).on('message', message => {
    let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'short')) {
    googl.shorten(args[0])
    .then(function (shortenUrl) {
        message.channel.send(`this is the Short Link: ${shortenUrl}`);
    })
    .catch(function (err) {
        console.log(err.message);
    });
}
});



client.login("NDg5MTE5MTI5MjM2NjY4NDI2.Dnp-LQ.z5mWQIoXd2flHpo5yXwm7X4PHp8")
