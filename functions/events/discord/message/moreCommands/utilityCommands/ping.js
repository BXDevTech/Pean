const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let latency = new Date() - new Date(context.params.event.timestamp);

await lib.discord.channels['@0.3.0'].messages.create({
  "channel_id": `${context.params.event.channel_id}`,
  "content": ``,
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
      "title": `🌡️ **Pean Health Check**🌡️`,
      "description": `Current health is ${latency}ms. 🚀
      
      The bot is feeling fit as a fiddle and ready to rock your server! If it were a person, it would be doing cartwheels right now. 😄
      
      No worries, we've got your back for all your server's needs. Keep the fun going! 🎉`,
      "color": 0x62ea71,
      "footer": {
        "text": `🔊 Made with music and 💚 by BXDev Technology.`,
      },
    }
  ]
});

// BXDevTech
