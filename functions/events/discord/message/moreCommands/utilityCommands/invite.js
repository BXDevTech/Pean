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
              "label": `🚀 **Join the Party**:`,
              "url": `https://discord.com/api/oauth2/authorize?client_id=962858123515805717&permissions=3295296&scope=bot%20applications.commands`,
              "disabled": false,
              "type": 2,
            },
          ],
        },
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
      "title": `💌 **Invite Pean to Your Server** 💌
      `,
      "description": `Hey there, party people! Ready to add some musical magic to your Discord server? 
      
      Invite me to your server, and let the good times roll! 🪄
      `,
      "color": 0x62ea71,
      "fields": [
        {
          "name": `Get ready to dance, sing, and play like never before. It's going to be a blast! 🎉
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