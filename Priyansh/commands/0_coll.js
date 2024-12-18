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
  if(react.includes("call") ||
     react.includes("coll") ||
     react.includes("CALL") ||
react.includes("Coll")) {
    var msg = {
        body: `💝🌸🍒 में कैसे आऊ कॉल में तो बोट हु 😑😑`,attachment: fs.createReadStream(__dirname + `/noprefix/coll1.gif`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📞", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
