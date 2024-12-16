const fs = require("fs");
module.exports.config = {
	name: "Love",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Ravi kumar", 
	description: "hihihihi",
	commandCategory: "ravi",
	usages: "love",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("I love you")==0 || event.body.indexOf("i love you")==0 || event.body.indexOf("bot love you")==0 || event.body.indexOf("Bot i love you")==0 || event.body.indexOf("Love you")==0 ||  event.body.indexOf("Bot I Love You")==0 || event.body.indexOf("I LOVE YOU")==0 || event.body.indexOf("Bot I love you")==0) {
		var msg = {
				body: "🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙 I LOVE YOU TOO MERI JAAN UMAAAA😚😚🥀✨💦💙｡☆✼★━━━━━━━━━━━━★✼☆｡🥀✨💦💙",
				attachment: fs.createReadStream(__dirname + `/ravi/love.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}