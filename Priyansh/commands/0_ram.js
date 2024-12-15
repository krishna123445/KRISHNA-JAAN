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
     react.includes("Radhe") || react.includes("Ram") || react.includes("syam") || react.includes("Syam") || react.includes("SYAM") || react.includes("radhe") ||
react.includes("Radhe") ||
react.includes("RADHE")) {
		var msg = {
				body: `╔══•✥✥🌹ॐ🌹✥✥•══╗ 
🌹🌟•❀•#Զเधॆ_Զเधॆ•❀•🌟🌹
╚══•✥✥🌹ॐ🌹✥✥•══╝ 
     💎‼#श्रीराधेकृष्णा‼💎
🍒🌴‼श्री कृष्णा‼🌴🍒*
      *श्रीकृष्ण गोविन्द हरे मुरारी,*
    *हे नाथ नारायण वासुदेवाय!!!*
        *꧁!! Զเधॆ Զเधॆ !!꧂*
    ┈┉┅━❀꧁ω❍ω꧂❀━┅┉┈`,attachment: fs.createReadStream(__dirname + `/wall/radhe.webp`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙏", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}
