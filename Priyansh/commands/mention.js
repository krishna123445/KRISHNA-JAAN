module.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "𝐊𝐑𝐈𝐒𝐇𝐍𝐀",
  description: "Bot will rep ng tag admin or rep ng tagbot ",
  commandCategory: "Other",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61568216591260") {
    var aid = ["61568216591260"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Wo Busy H mujhe Bolo Kya Bolna H?", "Kya Hua Boss ko q Bula Rhe Ho?", "Wo Shayad Busy hoga", "𝐊𝐑𝐈𝐒𝐇𝐍𝐀 𝐉𝐈 𝐓𝐎 𝐂𝐇𝐀𝐋𝐄 𝐆𝐘𝐄 🤔"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
        }
