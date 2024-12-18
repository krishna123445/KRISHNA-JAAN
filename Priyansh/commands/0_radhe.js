const fs = require("fs");
module.exports.config = {
  name: "HARTLESS",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "Krishna", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("radhe") ||
     react.includes("Radhe") || react.includes("Ram") || react.includes("ram") ||
react.includes("SYAM") ||
react.includes("Mahadev") ||     
react.includes("RAM")) {
    var msg = {
        body: `╔══•✥✥🌹ॐ🌹✥✥•══╗ 
🌹🌟•❀•#Զเधॆ_Զเधॆ•❀•🌟🌹
╚══•✥✥🌹ॐ🌹✥✥•══╝ 
     💎‼#श्रीराधेकृष्णा‼💎
🍒🌴‼श्री कृष्णा‼🌴🍒*
      *श्रीकृष्ण गोविन्द हरे मुरारी,*
    *हे नाथ नारायण वासुदेवाय!!!*
        *꧁!! Զเधॆ Զเधॆ !!꧂*
    ┈┉┅━❀꧁ω❍ω꧂❀━┅┉┈`,attachment: fs.createReadStream(__dirname + `/noprefix/radhe.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏🏻", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
