const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.3.0'].messages.create({
    "channel_id": `${context.params.event.channel_id}`,
    "content": ``,
    "allowed_mentions": {
       "replied_user": false
     },
     "message_reference": {
       "message_id": context.params.event.id
     },
    "embed": {
      "title": `🎵 **BXDev Technology Music Bot - Pea3 | Pean**`,
      "description": `Introducing BXDev's Pean (V3.0), where we bring the beats to your server! 🎶
            
      **Prefix**: >> * <<
      
      **Commands**:
        *help*: Get information on the available commands.
        *setup*: Set up the bot in a specific channel **(REQUIRED)**.
        *play*: Play your favorite songs in your channel.
        *search*: Search on Youtube, Google + more  right within Discord.
        *fun* : Have fun and explore!
        *utility* : Just the boring stuff!
      
      **Links**:
        [GitHub Page](https://github.com/bxdevtech): Check out our open-source project.
        [Support Server](https://discord.gg/SsW9HPKnUR): Join our Discord community for assistance.
      
  Thank You!
  If you have any questions or feedback, please join our Discord Community using the links above. You can also follow us on Twitter, [@BXDevTech](https://twitter.com/bxdevtech).`,
      "color": 0x62ea71,
      "footer": {
        "text": `🔊 Made with music and 💚 by BXDev Technology.`,
      },      
    },
  });

// BXDevTech
