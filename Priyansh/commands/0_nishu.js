const fs = require("fs");
module.exports.config = {
	name: "began",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "RAVI KUMAR", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "began ayee",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Nishu")==0 || event.body.indexOf("NISHU")==0 || event.body.indexOf("nishu")==0 || event.body.indexOf("@Nishu Nishu")==0) {
		var msg = {
				body: "🍒🍒 ग्रुप की चुडैल 🍒🍒",
				attachment: fs.createReadStream(__dirname + "/ravi/nishu.jpg")
			}
		api.sendMessage(msg, threadID, messageID);
		api.setMessageReaction("👻", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}