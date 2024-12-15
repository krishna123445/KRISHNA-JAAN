const fs = require("fs");
module.exports.config = {
	name: "kabutri",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "RAVI KUMAR", 
	description: "Just Respond",
	commandCategory: "ravi",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("kabutri") ||
     react.includes("Kabutri") || react.includes("KABUTRI") || react.includes("KaBuTrI") ||
react.includes("Kabutri") ||
react.includes("@Õõ Kabutri KABUTAR　BAN　KE　AA　JAYO　TUYE　CHHAT　PAR　KHADI　MILINGI　RE　AB　MAN　NA　LAGE　SASRE　ME　AB　CHHORA　TERE　SATH　CHALU　RE　ME　JAB　AAYI　SASARI　SE　MENE　TERI　SAKAL　NA　DEKHI　RE　NUMBER　KO　TU　CHANGE　KAR　DIJO　SARK　RAKHE　BALAM　KARESI　RE　 - X")) {
		var msg = {
				body: `💖𝐑𝐀𝐕𝐈 𝐊𝐈 𝐅𝐑𝐈𝐄𝐍𝐃 𝐊𝐀𝐁𝐔𝐓𝐑𝐈💖`,attachment: fs.createReadStream(__dirname + `/ravi/kabutri.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💖", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}