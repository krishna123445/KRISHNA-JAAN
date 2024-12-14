module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "turn the bot off",
	commandCategory: "system",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>{
    const permission = ["61568216591260", "61568216591260"];
  	if (!permission.includes(event.senderID)) return api.sendMessage("[ ERR ] You don't have permission to use this command, This Command Only For Priyansh", event.threadID, event.messageID);
  api.sendMessage(`[ 𝐎𝐊 ] ${global.config.BOTNAME} ☺️🥰😜😝 ☜♡☞ ☆(❁‿❁)☆ 𝐀𝐀𝐏 𝐋𝐎𝐆 𝐌𝐄𝐑𝐒𝐄 𝐊𝐇𝐔𝐒𝐇 𝐍𝐇𝐈 𝐄𝐒𝐋𝐈𝐘𝐄 𝐌𝐄 𝐉𝐀 𝐑𝐀𝐇𝐀 𝐇𝐔 𝐎𝐅𝐅 𝐁𝐘𝐘 𝐒𝐀𝐁𝐈 𝐊𝐎 𝐊𝐇𝐈𝐘𝐀𝐋 𝐑𝐀𝐊𝐇𝐍𝐀 𝐀𝐀𝐏𝐍𝐀 𝐒𝐀𝐁𝐈 𝐌𝐄𝐌𝐁𝐄𝐑𝐒 😍😘 𝐑𝐀𝐃𝐇𝐄 𝐑𝐀𝐃𝐇𝐄 😍😘 ☆(❁‿❁)☆`,event.threadID, () =>process.exit(0))
}
