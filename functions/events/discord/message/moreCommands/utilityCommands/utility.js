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
      "title": `🛠️ **Pean  - Utility Commands**`,
      "description": `Ready to manage your server efficiently? You're in the right place! 🌟`,
      "color": 0x62ea71,
      "fields": [
        {
          "name": `Setup`,
          "value": `*setup`,
          "description": `Configure the bot for your server.`,
          "inline": true
        },
        {
          "name": `Help`,
          "value": `*help`,
          "inline": true
        },
        {
          "name": `Information`,
          "value": `*info`,
          "inline": true
        },
        {
          "name": `Health`,
          "value": `*ping`,
          "inline": true
        },
        {
          "name": `Vote`,
          "value": `*vote`,
          "inline": true
        },
        {
          "name": `Invite`,
          "value": `*invite`,
          "inline": true
        },
      ],
      "footer": {
        "text": `🔊 Made with music and 💚 by BXDev Technology.`,
      },
    }
  ]
});

// BXDevTech