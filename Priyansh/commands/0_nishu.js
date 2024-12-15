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
	if (event.body.indexOf("lalla")==0 || event.body.indexOf("LALLA")==0 || event.body.indexOf("Lalla")==0 || event.body.indexOf("LaLlA")==0) {
		var msg = {
				body: "🍒🍒 कृष्णा की जान ई लव यू लल्ला 🍒🍒",
				attachment: fs.createReadStream(__dirname + "/wall/jaan.jpg")
			}
		api.sendMessage(msg, threadID, messageID);
		api.setMessageReaction("💋", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
