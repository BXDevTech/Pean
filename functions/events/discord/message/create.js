
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const Player = require('../../../../helper/player.js');
const send = require('../../../../tools/send.js')
const message = context.params.event;
const keyDetails = await lib.utils.kv['@0.1.16'].get({
  key: `${process.env.key}_${message.guild_id}`,
});

if (message.content.startsWith('*setup')) {
  let channelId = message.content.match(/\d+/g);
  if (!channelId)
    return lib.discord.channels['@0.2.0'].messages.create({
      content: `Please mention the channel where you want to setup <@962858123515805717>.`,
      channel_id: message.channel_id,
    });
  else channelId = channelId[0];

  const msg = await lib.discord.channels['@0.2.0'].messages.create({
     content: `**[ Queue]**\n`,
     channel_id: channelId,
     "embeds": [
     {
        "type": "rich",
       "title": `🎵 **Pean Music Panel** 🎵`,
       "description": `You're in the driver's seat now!
       if your stuck type ***music-help**
       `,
       "color": 0x62ea71,
       "footer": {
       "text": `🔊 Made with music and 💚 by BXDev Technology.`,
       },
  }
     ] 
   });

  await Player.reset({keyDetails: {channelId, messageId: msg.id}});

  await lib.utils.kv['@0.1.16'].set({
    key: `${process.env.key}_${message.guild_id}`,
    value: {channelId, messageId: msg.id},
  });

  await lib.discord.channels['@0.2.0'].messages.create({
    content: `Setup is completed :)`,
    channel_id: message.channel_id,
  });
} else if (keyDetails && keyDetails.channelId === message.channel_id) {
  const voice_channel = await lib.utils.kv['@0.1.16'].get({
    key: `voice_${process.env.key}_${message.guild_id}_${message.author.id}`,
  });

  await lib.discord.channels['@0.2.0'].messages.destroy({
    message_id: message.id, // required
    channel_id: message.channel_id, // required
  });

  if (!voice_channel)
    return send("Please join a voice channel first!", { channel_id: context.params.event.channel_id })

  await Player.play(message.content, {
    channel_id: voice_channel.channelId,
    guild_id: message.guild_id,
    keyDetails,
  }).catch(async (err) => {
    console.log(err)
    await send("Unable to play the song, please try again later.", { channel_id: context.params.event.channel_id })
  });
}

// BXDevTech





