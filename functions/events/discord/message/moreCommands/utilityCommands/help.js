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
      "title": `📚 **Pean Help Station**`,
      "description": `Need some guidance on how to use Pean? You got it! 🚀`,
      "color": 0x62ea71,
      "fields": [
        {
          "name": `Utility Commands`,
          "value": `*utility `,
          "inline": true
        },
        {
          "name": `Search Commands`,
          "value": `*search`,
          "inline": true
        },
        {
          "name": `Fun Commands`,
          "value": `*fun`,
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