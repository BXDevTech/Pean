// authenticates you with the API standard library
const lib = require('lib')({token: process.env.STDLIB_SECRET_TOKEN});
const ytdl = require('ytdl-core');
const yts = require('yt-search');

module.exports = {
  play: async (event, searchString, sendErrorToChannel) => {
    //RADIO get's the information for what channel for the bot to join or leave.
    let RADIO = await lib.utils.kv['@0.1.16'].get({
      key: `user_data_${event.author.id}_${event.guild_id}`,
    });
    try {
      let youtubeLink;
      if (!searchString) {
        throw new Error('No search string provided.');
      }
      if (!searchString.includes('youtube.com')) {
        let results = await yts(searchString);
        console.log(results);
        if (!results?.all?.length) {
          throw new Error(
            'No results found for your search string. Please try a different one.'
          );
        }
        youtubeLink = results.all[0].url;
      } else {
        youtubeLink = searchString;
      }
      let downloadInfo = await ytdl.getInfo(youtubeLink);
      if (!RADIO) {
        await lib.discord.channels['@0.2.0'].messages.create({
        channel_id: `${event.channel_id}`,
        content: `You need to be in a VC to use this command.`,
        });
      } else
      return lib.discord.voice['@0.0.1'].tracks.play({
        channel_id: `${RADIO}`,
        guild_id: `${event.guild_id}`,
        download_info: downloadInfo,
      });
    } catch (e) {
      console.log(e);
      if (sendErrorToChannel) {
        if (e.message.includes('410')) {
          e.message = `Failed to download track from YouTube. Please try again later.`;
        }
        await lib.discord.channels['@0.2.0'].messages.create({
          channel_id: `${event.channel_id}`,
          content: ` `,
          embeds: [
            {
              type: 'rich',
              title: `Failed to play track!`,
              description: e.message,
              color: 0x6bbedd,
            },
          ],
        });
      }
    }
  },
  play1: async (event, searchString, sendErrorToChannel) => {
    console.log(event.channel_id);
    try {
      let youtubeLink;
      if (!searchString) {
        throw new Error('No search string provided.');
      }
      if (!searchString.includes('youtube.com')) {
        let results = await yts(searchString);
        console.log(results);
        if (!results?.all?.length) {
          throw new Error(
            'No results found for your search string. Please try a different one.'
          );
        }
        youtubeLink = results.all[0].url;
      } else {
        youtubeLink = searchString;
      }
      let downloadInfo = await ytdl.getInfo(youtubeLink);
      return lib.discord.voice['@0.0.1'].tracks.play({
        channel_id: `${event.channel_id}`,
        guild_id: `${event.guild_id}`,
        download_info: downloadInfo,
      });
    } catch (e) {
      console.log(e);
      if (sendErrorToChannel) {
        if (e.message.includes('410')) {
          e.message = `Failed to download track from YouTube. Please try again later.`;
        }
        await lib.discord.channels['@0.2.0'].messages.create({
          channel_id: `${event.channel_id}`,
          content: ` `,
          embeds: [
            {
              type: 'rich',
              title: `Failed to play track!`,
              description: e.message,
              color: 0x6bbedd,
            },
          ],
        });
      }
    }
  },
  sendPlayerUpdate: async (event, currentTrack, currentQueue) => {
    //RADIO get's the information for what channel for the bot to join or leave.
    let RADIO = await lib.utils.kv['@0.1.16'].get({
      key: `user_data_${event.author.id}_${event.guild_id}`,
    });
    let embeds = [];
    if (currentTrack) {
      embeds.push({
        type: 'rich',
        description: [
          `${currentTrack.paused ? 'Paused' : 'Playing'} in <#${RADIO}>:`,
          '',
          `**${currentTrack.media_display_name || 'Nothing playing'}**`,
        ].join('\n'),
        color: currentTrack.paused ? 0xaa0000 : 0x00aa00,
      });
    }
    if (currentQueue) {
      let queueMessage = ['Playing next:', ''];
      if (currentQueue.length) {
        queueMessage = queueMessage.concat(
          currentQueue
            .map((track) => {
              return `**• ${track.media_display_name}**`;
            })
            .slice(0, 10)
        );
      } else {
        queueMessage = queueMessage.concat([
          `**No tracks in queue. Add one with \`${process.env.PREFIX}play <link or name>\`!**`,
        ]);
      }
      embeds.push({
        type: 'rich',
        description: queueMessage.join('\n'),
        color: 0x0000aa,
      });
    }
    await lib.discord.channels['@0.2.0'].messages.create({
      channel_id: `${event.channel_id}`,
      content: ` `,
      embeds: embeds,
    });
  },
  enqueueTrack: async (event, searchString) => {
    let queueKey = `${event.guild_id}:musicQueue`;
    let currentQueue = await lib.utils.kv['@0.1.16'].get({
      key: queueKey,
      defaultValue: [],
    });
    try {
      let results = await yts(searchString);
      if (!results?.all?.length) {
        throw new Error(
          'No results found for your search string. Please try a different one.'
        );
      }
      currentQueue.push({
        youtube_link: results.all[0].url,
        media_display_name: results.all[0].title,
      });
      await lib.utils.kv['@0.1.16'].set({
        key: queueKey,
        value: currentQueue,
      });
    } catch (e) {
      console.log(e);
      if (e.message.includes('410')) {
        e.message = `Failed to download track from YouTube. Please try again later.`;
      }
      await lib.discord.channels['@0.2.0'].messages.create({
        channel_id: `${event.channel_id}`,
        content: ` `,
        embeds: [
          {
            type: 'rich',
            title: `Failed to queue track!`,
            description: e.message,
            color: 0x6bbedd,
          },
        ],
      });
      throw e;
    }
    return currentQueue;
  },
  dequeueTrack: async (event) => {
    let queueKey = `${event.guild_id}:musicQueue`;
    let currentQueue = await lib.utils.kv['@0.1.16'].get({
      key: queueKey,
      defaultValue: [],
    });
    if (currentQueue.length) {
      await lib.utils.kv['@0.1.16'].set({
        key: queueKey,
        value: currentQueue.slice(1),
      });
    }
    return currentQueue[0];
  },
  clearQueue: async (event) => {
    let queueKey = `${event.guild_id}:musicQueue`;
    await lib.utils.kv['@0.1.16'].clear({
      key: queueKey,
    });
  },
  retrieveQueue: async (event) => {
    let queueKey = `${event.guild_id}:musicQueue`;
    return lib.utils.kv['@0.1.16'].get({
      key: queueKey,
      defaultValue: [],
    });
  },
};


// BXDevTech