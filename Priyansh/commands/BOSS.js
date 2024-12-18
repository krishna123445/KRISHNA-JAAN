const fs = require("fs");
module.exports = {
  config:{
	name: "Boss",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "Krishna", 
	description: "Fun",
	category: "no prefix",
	usages: "boss",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf("malik")==0 || body.indexOf("Malik")==0 || body.indexOf("Ravi")==0 || body.indexOf("krishan")==0) {
		var msg = {
				body: "💝🌸 𝐎𝐖𝐍𝐄𝐑 ÷ ☞︎ 💝 𝐌𝐑. 𝗞ᏒƖ𝘚Η𝑵𝔸 💝 ☜︎\n✧═════════•❁❀❁•═════════✧\n☞︎ 💝🌸🍒 मेरे बाबू कृष्णा की प्रोफ़ाइल 💝🍒🌸 ☜︎\n✧═════════•❁❀❁•═════════✧\n☞︎ 🍒🌸 मेरे मालिक की फेसबुक की लिंक 💝🌸🍒 ☜︎\n✧═════════•❁❀❁•═════════✧\n☞︎  [ https://www.facebook.com/profile.php?id=61568216591260&mibextid=ZbWKwL ] ☜︎",
				attachment: fs.createReadStream(__dirname + `/noprefix/boss.jpg`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🫅🏻", event.messageID, (err) => {}, true)
		}
	},
	module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
