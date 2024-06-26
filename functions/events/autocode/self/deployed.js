const lib = require('lib')({ token: 'OTYyODU4MTIzNTE1ODA1NzE3.G00Cg5.58Q_D3TZdHUkKzwlXdm_LG-SpCXOUEmlgrYTgs' });

async function sendUpdateLog(context) {
  try {
    await lib.discord.channels['@0.3.0'].messages.create({
      "channel_id": "1171472351855116393",  // Replace with your channel ID
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
          "title": "📋 **Pean - Update Log** 📋",
          "description": "Your feedback is invaluable, so please feel free to share your thoughts and suggestions.",
          "color": 0x62ea71,
          "fields": [
            {
              "name": "Version 3.0.0:",
              "value": `
🚀 Added a new feature that [describe the new feature].
🐞 Fixed an issue with [describe the issue that was resolved].
🌟 Improved [mention improvements made, e.g., performance, user experience].
🌐 Made adjustments to [mention any changes to commands or behavior].
💡 Tweaked [mention any other notable changes or additions].`,
              "inline": true
            }
          ],
          "footer": {
            "text": "🔊 Made with music and 💚 by BXDev Technology."
          }
        }
      ]
    });
    console.log('Update log message sent successfully!');
  } catch (err) {
    console.error('Error sending update log message:', err);
  }
}

// Call the function to send the update log message
sendUpdateLog(context);  // Make sure 'context' is defined appropriately
