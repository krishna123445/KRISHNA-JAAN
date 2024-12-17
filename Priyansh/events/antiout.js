module.exports.config = {
 name: "antiout",
 eventType: ["log:unsubscribe"],
 version: "0.0.1",
 credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
 description: "Listen events"
};

module.exports.run = async({ event, api, Threads, Users }) => {
 let data = (await Threads.getData(event.threadID)).data || {};
 if (data.antiout == false) return;
 if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
 const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
 const type = (event.author == event.logMessageData.leftParticipantFbId) ? "self-separation" : "Koi Ase Pichware Mai Lath Marta Hai?";
 if (type == "self-separation") {
  api.addUserToGroup(event.logMessageData.leftParticipantFbId, event.threadID, (error, info) => {
   if (error) {
    api.sendMessage(`     💝🌸🍒 𝐎𝐖𝐍𝐄𝐑÷ 𝕂ℝ𝕀𝕊ℍℕ𝔸 😘🙈💝\n✧═════════•❁❀❁•═════════✧\n🌸🍒 𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 ÷ ᴋʀɪsʜɴᴀ ʙᴏᴛ 🙈💝🌸\n✧═════════•❁❀❁•═════════✧\n😔 सारी 💝 कृष्णा बाबू 💝 इसे द्वारे एड नहीं कर पाया ग्रुप में ,😔🥺\n✧═════════•❁❀❁•═════════✧\n😝😁 𝗕𝗛𝗔𝗚𝗡𝗘 𝗩𝗔𝗟𝗔 𝗞𝗔 𝗡𝗔𝗠𝗘 ÷ ☞︎ [ ${name} ] ☜︎ 😝😂🤭\n✧═════════•❁❀❁•═════════✧\n😌😑 शायद मुझे ब्लॉक कर के भाग गए 😑😔🌸\n✧═════════•❁❀❁•═════════✧\n💝🌸🍒 𝗦𝗢𝗥𝗥𝗬 𝗞𝗥𝗜𝗦𝗛𝗡𝗔 𝗕𝗔𝗕𝗨 🙏🏻😥😭 `, event.threadID)
   } else api.sendMessage(`     💝🌸🍒 𝐎𝐖𝐍𝐄𝐑÷ 𝕂ℝ𝕀𝕊ℍℕ𝔸 😘🙈💝\n✧═════════•❁❀❁•═════════✧\n🌸🍒 𝗕𝗢𝗧 𝗡𝗔𝗠𝗘 ÷ ᴋʀɪsʜɴᴀ ʙᴏᴛ 🙈💝🌸\n✧═════════•❁❀❁•═════════✧\n🤭 भाग के जाने का नहीं 💝 कृष्णा बाबू 💝के प्रीमिशन के बिना कही नहीं जा सकते 💝🌸🍒\n✧═════════•❁❀❁•═════════✧\n😝😁 𝗕𝗛𝗔𝗚𝗡𝗘 𝗩𝗔𝗟𝗔 𝗞𝗔 𝗡𝗔𝗠𝗘 ÷ ☞︎ [ ${name} ] ☜︎ 😝😂🤭\n✧═════════•❁❀❁•═════════✧\n😘💝🌸 बेबी देखो आपको द्वारे एड कर दिया 🤭🙈🌸\n✧═════════•❁❀❁•═════════✧\n💝🌸🍒 ᴋʀɪsʜɴᴀ ʙᴏᴛ ʜᴀɪ ᴊᴀʙ ᴛᴀᴋ ᴋᴏɪ ᴋᴀʜɪ ɴʜɪ ᴊᴀ sᴀᴋᴛᴀ 🤭😌🙈`, event.threadID);
  })
 }
}
