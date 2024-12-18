module.exports.config = {
  name: "mention-bot",
  version: "1.0.0-beta-fixbyDungUwU",
  hasPermssion: 0,
  credits: "Ravi kumar",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "system",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61568216591260") {
    var aid = ["61568216591260","61568216591260", "61568216591260","61568216591260" , "61555796837996"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
  var msg = ["𝐁𝐀𝐀𝐓 𝐌𝐄𝐑𝐒𝐄 𝐒𝐄 𝐁𝐀𝐀𝐓 𝐊𝐀𝐑 # 𝐔𝐒𝐄 𝐌𝐄𝐍𝐓𝐈𝐎𝐍 𝐊𝐘𝐔 𝐊𝐀𝐑 𝐑𝐄𝐇𝐄 𝐇𝐎🙄🙄", "𝐊𝐘𝐀 𝐇𝐔𝐀 𝐁𝐎𝐒𝐒 𝐊𝐎 𝐊𝐘𝐎 𝐁𝐔𝐋𝐀 𝐑𝐄𝐇𝐄 𝐇𝐎😒😒", "𝐖𝐎 𝐒𝐀𝐘𝐀𝐃 𝐁𝐔𝐒𝐘 𝐇𝐀𝐈 𝐀𝐁𝐇𝐈 😐🙄", "𝐓𝐔𝐉𝐇𝐑 𝐒𝐔𝐍𝐀𝐈 𝐍𝐇𝐈 𝐃𝐄𝐓𝐀 𝐌𝐄𝐑𝐄 𝐀𝐃𝐌𝐈𝐍 𝐊𝐎 𝐓𝐀𝐍𝐆 𝐌𝐀𝐓 𝐊𝐀𝐑𝐎 😒😒", "𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐊𝐎 𝐓𝐀𝐍𝐆 𝐌𝐀𝐓 𝐊𝐀𝐑𝐎🤨🤨🤨", "𝐀𝐁𝐄 𝐁𝐎𝐋𝐀 𝐍𝐀 𝐌𝐄𝐑𝐄 𝐀𝐃𝐌𝐈𝐍 𝐊𝐎 𝐁𝐀𝐑 𝐁𝐀𝐑 𝐌𝐄𝐍𝐓𝐈𝐎𝐍 𝐌𝐀𝐓 𝐊𝐀𝐑𝐈 𝐄𝐊 𝐁𝐀𝐀𝐑 𝐌𝐄 𝐒𝐔𝐍𝐀𝐈 𝐍𝐇𝐈 𝐃𝐄𝐓𝐀 🧐🧐", "𝐊𝐘𝐀 𝐊𝐀 𝐇𝐀𝐈 𝐌𝐔𝐉𝐇𝐄 𝐁𝐎𝐋 𝐁𝐎𝐒𝐒 𝐊𝐎 𝐓𝐀𝐍𝐆 𝐌𝐀𝐓 𝐊𝐀𝐑𝐎 😐😐😐", "𝐄𝐊 𝐁𝐀𝐀𝐑 𝐌𝐄 𝐒𝐀𝐌𝐀𝐉𝐇 𝐍𝐇𝐈 𝐀𝐀𝐓𝐀 ,𝐊𝐘𝐎 𝐌𝐄𝐍𝐓𝐈𝐎𝐍 𝐊𝐀𝐑 𝐑𝐄𝐇𝐄 𝐇𝐎 𝐁𝐎𝐒𝐒 𝐊𝐎 😒😒😒" , "𝐌𝐄𝐑𝐄 𝐁𝐎𝐒𝐒 𝐊𝐎 𝐓𝐀𝐍𝐆 𝐌𝐀𝐓 𝐊𝐈𝐘𝐀 𝐊𝐀𝐑𝐎 𝐒𝐀𝐌𝐉𝐇𝐑 😒"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
