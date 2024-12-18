const fs = require("fs");
module.exports.config = {
	name: "prem aa gya",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "riya", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Prem",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("krishna")==0 || event.body.indexOf("Krishna")==0 || event.body.indexOf("KRISHNA")==0 || event.body.indexOf("@ᴹʳ᭄ꔰ『Krishna』 ꔰ鬱࿐")==0) {
		var msg = {
				body: "💝🌸 𝐎𝐖𝐍𝐄𝐑 ÷ ☞︎ 💝 𝐌𝐑. 𝗞ᏒƖ𝘚Η𝑵𝔸 💝 ☜︎\n✧═════════•❁❀❁•═════════✧\n☞︎ 💝🌸🍒 मेरे बाबू कृष्णा की प्रोफ़ाइल 💝🍒🌸 ☜︎\n✧═════════•❁❀❁•═════════✧\n☞︎ 🍒🌸 मेरे मालिक की फेसबुक की लिंक 💝🌸🍒 ☜︎\n✧═════════•❁❀❁•═════════✧\n☞︎  [ https://www.facebook.com/profile.php?id=61568216591260&mibextid=ZbWKwL ] ☜︎",
        attachment: fs.createReadStream(__dirname + `/noprefix/boss.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫅", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
