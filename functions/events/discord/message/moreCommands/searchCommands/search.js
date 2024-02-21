const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
   "channel_id": `${context.params.event.channel_id}`,
   "content": "",
   "tts": false,
   "allowed_mentions": {
      "replied_user": false
    },
    "message_reference": {
      "message_id": context.params.event.id
    },
   "embeds": [
     {
       "type": "rich",
       "title": `🔍 **Pean - Search Commands**`,
       "description": `Ready to uncover the answers you seek? Type your query! 🌐`,
       "color": 0x62ea71,
       "fields": [
         {
           "name": `Google Search`,
           "value": `*google`,
           "inline": true
         },
         {
           "name": `Bing Search`,
           "value": `*bing`,
           "inline": true
         },
         {
           "name": `Reddit Search`,
           "value": `*reddit`,
           "inline": true
         },
         {
           "name": `Youtube Search`,
           "value": `*youtube`,
           "inline": true
         },
         {
           "name": `Twitch Search`,
           "value": `*twitch`,
           "inline": true
         },
         {
           "name": `Github Search`,
           "value": `*github`,
           "inline": true
         }
       ],
       "footer": {
       "text": `🔊 Made with music and 💚 by BXDev Technology.`,
       },
     }
   ]
 });
 
// BXDevTech
