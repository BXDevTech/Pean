const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});

await lib.discord.users['@0.1.0'].me.status.update({
  activity_name: `BXDev™`, 
  activity_type: 'LISTENING',
  url: '',
  status: 'ONLINE',
});

// BXDevTech