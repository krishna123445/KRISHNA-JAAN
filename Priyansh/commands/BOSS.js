const fs = require("fs");
module.exports.config = {
  name: "call",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "KRISHNA", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("krishna") ||
     react.includes("Krishna") ||
     react.includes("KRISHNA") ||
react.includes("@ᴹʳ᭄ꔰ『Krishna』 ꔰ鬱࿐ ")) {
    var msg = {
        body: `💝🌸 𝐎𝐖𝐍𝐄𝐑 ÷ ☞︎ 💝 𝐌𝐑. 𝗞ᏒƖ𝘚Η𝑵𝔸 💝 ☜︎\n✧═════════•❁❀❁•═════════✧\n☞︎ 💝🌸🍒 मेरे बाबू कृष्णा की प्रोफ़ाइल 💝🍒🌸 ☜︎\n✧═════════•❁❀❁•═════════✧\n☞︎ 🍒🌸 मेरे मालिक की फेसबुक की लिंक 💝🌸🍒 ☜︎\n✧═════════•❁❀❁•═════════✧\n☞︎  [ https://www.facebook.com/profile.php?id=61568216591260&mibextid=ZbWKwL ] ☜︎`,attachment: fs.createReadStream(__dirname + `/noprefix/boss.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫅🏻", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
