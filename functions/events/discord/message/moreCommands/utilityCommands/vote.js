const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": ``,
  "tts": false,
  "components": [
    {
      "type": 1,
      "components": [
        {
          "style": 5,
          "label": `Top.gg`,
          "url": `https://top.gg/bot/962858123515805717`,
          "disabled": true,
          "type": 2
        },
        {
          "style": 5,
          "label": `VoidBots`,
          "url": `https://voidbots.net/bot/962858123515805717/`,
          "disabled": true,
          "type": 2
        },
      ]
    }
  ],
 "allowed_mentions": {
     "replied_user": false
   },
   "message_reference": {
     "message_id": context.params.event.id
   },
  "embeds": [
    {
      "type": "rich",
      "title": `🗳️ **Vote for Pean** ️`,
      "description": `Love the music and fun I bring to your server? Want to show your support? You can help us grow by voting for Pean!
                  
      Your support means the world to us. Thanks for keeping the groove alive! 🎶
       
       `,
      
      "color": 0x62ea71,
      "fields": [
        {
          "name": `🚀 **Vote Now, and help me get to MARS**
          `,
          "value": "\u200B"
        }
      ],
      "footer": {
        "text": `🔊 Made with music and 💚 by BXDev Technology.`,
      },
    }
  ]
});

// BXDevTech