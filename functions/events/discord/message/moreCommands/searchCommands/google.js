const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
let search = context.params.event.content.split(' ').splice(1).join('%20');
let google = `https://www.google.com/search?q=${search}`;
let message = context.params.event.content;

await lib.discord.channels['@0.0.6'].messages.create({
   "channel_id": `${context.params.event.channel_id}`,
   "content": ``,
    "allowed_mentions": {
     "replied_user": false
   },
   "message_reference": {
     "message_id": context.params.event.id
   },
   "embed": {
     "title": `🔍 **Pean Google Search**`,
     "description": `Great choice! I've embarked on a quest to find the information you seek. 🌟
     Here are the search results for **${search}**: 
     >> ${google} <<`,
     "color": 0x62ea71,
     "footer": {
       "text": `🔊 Made with music and 💚 by BXDev Technology.`,
     },
   },
 });
 
 // BXDevTech