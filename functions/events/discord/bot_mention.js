const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.channels['@0.1.1'].messages.create({
  channel_id: `${context.params.event.channel_id}` ,
  content: `🤫 Shh... I'm Seeping right now. ⛔`,
  "allowed_mentions": {
     "replied_user": false
   },
   "message_reference": {
     "message_id": context.params.event.id
   },
  });
  
  // BXDevTech