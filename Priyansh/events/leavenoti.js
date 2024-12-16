module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "RAVI KUMAR ",//Mod by H.Thanh
	description: "Notify the Bot or the person leaving the group with a random gif/photo/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "leaveGif", "randomgif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
	const { threadID } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("DD/MM/YYYY || HH:mm:s");
  const hours = moment.tz("Asia/Kolkata").format("HH");
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? "खुद ही भाग गया 😐👈" : "एडमिन ने गुस्से में निकाल दिया 😐👈";
	const path = join(__dirname, "events", "123.mp4");
	const pathGif = join(path, `${threadID}123.mp4`);
	var msg, formPush

	if (existsSync(path)) mkdirSync(path, { recursive: true });

(typeof data.customLeave == "undefined") ? msg = "🍒🌸🌹 𝗢𝗪𝗡𝗘𝗥 ÷ 𝕂ℝ𝕀𝕊ℍℕ𝔸 𝔹𝔸𝔹𝕌 😘🌸🍒\n✧═════════•❁❀❁•═════════✧\n😍☞ 𝗞𝗥𝗜𝗦𝗛𝗡𝗔 𝗕𝗢𝗧 ☜😍\n✧═════════•❁❀❁•═════════✧\n☞︎[ 🅱🅰🆈 🙈 🅱🅰🆈 ]☜︎\n✧═════════•❁❀❁•═════════✧\n☞︎ 🍒🌸𝗡𝗔𝗠𝗘 ÷  {name} ☜︎\n✧═════════•❁❀❁•═════════✧\n☞︎ 🍒🌸𝗥𝗘𝗔𝗦𝗢𝗡 ÷ {type} ☜︎\n✧═════════•❁❀❁•═════════✧\n☞︎ 🍒🌸𝗧𝗜𝗠𝗘 ÷ {time} ☜︎\n✧═════════•❁❀❁•═════════✧\n☞︎ 😊🌸💝 {session} 💝🌸😊 ☜︎\n✧═════════•❁❀❁•═════════✧" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{session}/g, hours <= 10 ? "Suprabhat" : 
    hours > 10 && hours <= 12 ? "Good Afternoon" :
    hours > 12 && hours <= 18 ? "Good Evening" : "Good Night").replace(/\{time}/g, time);  

	const randomPath = readdirSync(join(__dirname, "cache", "leaveGif", "randomgif"));

	if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif) }
	else if (randomPath.length != 0) {
		const pathRandom = join(__dirname, "cache", "leaveGif", "randomgif",`${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
		formPush = { body: msg, attachment: createReadStream(pathRandom) }
	}
	else formPush = { body: msg }
	
	return api.sendMessage(formPush, threadID);
}
