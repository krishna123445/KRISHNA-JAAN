const fs = require("fs");
module.exports.config = {
	name: "Dance",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "Krishna", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("relationship") ||
     react.includes("Relationship") || react.includes("RELATIONSHIP") || react.includes("Relationship") ||
react.includes("RELATIONSHIP") ||
react.includes("rElAtIoNsHiP")) {
		var msg = {
				body: `‎🌿🍒🌸𝗘𝗞 𝗗𝗨𝗦𝗥𝗘 𝗞𝗜 𝗝𝗔𝗔𝗡🌸🍒🌿
\n✧═════════•❁❀❁•═════════✧\n
🍒🍓☞︎ [ 𝗞𝗥𝗜𝗦𝗛𝗡𝗔 𝗞𝗜 𝗝𝗔𝗔𝗡 ] ☜︎🍓🍒\n✧═════════•❁❀❁•═════════✧\n💝💕💕😍𝗜 𝗟𝗢𝗩𝗘 𝗬𝗢𝗨 𝗟𝗔𝗟𝗟𝗔😚😍😘\n✧═════════•❁❀❁•═════════✧\n
 •||• #ρყαɾ ʋσ _ɳԋι❌ ʝιʂɱҽ👉#Attitude 😒σɾ #Ego😏ԋσ, •||•
•||• #ρყαɾ😍 _ƚσ ʋσ ԋαι #ʝιʂɱ _ҽƙ “ɾσƚԋαɳ”
•||• ɱҽ#Expert 😘ԋσ ƚσ#ԃυʂɾα •|||• ɱαɳαɳҽ ɱҽ  👉#Perfect❤️️ ԋσ. •||•`,attachment: fs.createReadStream(__dirname + `/wall/jaan.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙈", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
