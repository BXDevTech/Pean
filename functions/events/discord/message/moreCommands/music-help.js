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
      "title": `🎵 **Pean Music Station**`,
      "description": `Need some guidance on how to use the music pannel? You got it! 🚀`,
      "color": 0x62ea71,
      "fields": [
        {
          "name": `Play | Pause Button`,
          "value": `⏯️`,
          "inline": true
        },
        {
          "name": `Stop Button`,
          "value": `⏯️`,
          "inline": true
        },
        {
          "name": `Skip Button`,
          "value": `⏩️`,
          "inline": true
        },
        {
          "name": `Loop Button`,
          "value": `🔁`,
          "inline": true
        },
        {
          "name": `Fix | Reset Button`,
          "value": `⏏️`,
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