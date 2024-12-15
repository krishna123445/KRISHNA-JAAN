jays = require("fs");
module.exports.config = {
	name: "Ram",
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
	if(react.includes("RAM") ||
     react.includes("ram") || react.includes("Ram") || react.includes("syam") || react.includes("Syam") || react.includes("SYAM") || react.includes("radhe") ||
react.includes("Radhe") ||
react.includes("RADHE")) {
		var msg = {
				body: `💖🙏 ‼🌟—  ༢།धे ༢།धे >𝟑 ♥🌍"☘️-हर हर महादेव || जय श्री राम || जय श्री कृष्णा_[💙🚩🧡💐🌹💐 🚩🚩🚩जय माता दी 🕉️'*🙏🚩💐🌹 𝗚𝘂𝗱' 𝗺𝗼𝗿𝗻īīī𝗻𝗴 💐💐-⎯꯭̽⎯꯭̽𝗝ʌ⃪⃜߮͢ɣ 𝐒͢ʜ⃪𝆭⃡ʀ⃭ⷯː⃪ıı 𐍂ʌ⃪⃜߮͢ϻ̼᪱⟵̠̽🪶💞⎯꯭̽⎯꯭̽𝗝ʌ⃪⃜߮͢ɣ 𝐒͢ʜ⃪𝆭⃡ʀ⃭ⷯː⃪ıı 𐍂ʌ⃪⃜߮͢ϻ̼᪱⟵̠̽🪶💞 🙏💖`,attachment: fs.createReadStream(__dirname + `/ravi/ram.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}