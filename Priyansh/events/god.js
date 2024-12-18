module.exports.config = {
	name: "god",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
	description: "Record bot activity notifications!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads }) {
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
    var formReport =  "💝=💝=💝= 𝐁𝐎𝐓 𝐍𝐎𝐓𝐈𝐅𝐈𝐂𝐀𝐓𝐈𝐎𝐍 =💝=💝=💝" +
                        "\n\n»💝 𝗚𝗥𝗢𝗨𝗣 𝗨𝗜𝗗 ÷" + event.threadID +
                        "\n\n»💝 𝗩𝗔𝗝𝗘 ÷ {task}" +
                        "\n\n»💝 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 𝗜𝗗 ÷: " + event.author +
                        "\n\n» " + Date.now() +" «",
        task = ""; 
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "Name does not exist",
                    newName = event.logMessageData.name || "Name does not exist";
            task = "💝🤭..𝗚𝗥𝗢𝗨𝗣 𝗡𝗔𝗠𝗘 𝗖𝗛𝗔𝗡𝗚𝗘𝗦  '" + oldName + "' to '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "😘😍🤩....𝗕𝗔𝗕𝗨 𝗞𝗜𝗦𝗜 𝗡𝗘 𝗠𝗨𝗝𝗛𝗘 𝗡𝗘𝗪 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘 𝗔𝗗𝗗 𝗞𝗜𝗬𝗔 𝗛 ...😀";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "😥😔..𝗕𝗔𝗕𝗨 𝗞𝗜𝗦𝗜 𝗡𝗘 𝗠𝗨𝗝𝗛𝗘 𝗚𝗥𝗢𝗨𝗣 𝗦𝗘 𝗡𝗜𝗞𝗔𝗟 𝗗𝗜𝗬𝗔 𝗛...😑😑😥😔"
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);
  var god = "8517943384999183";

    return api.sendMessage(formReport, god, (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
}
