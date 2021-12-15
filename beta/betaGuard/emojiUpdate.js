const Discord = require("discord.js");
const config = require(".././Settings/Config.json");
const panel = require("../Settings/Panel.json");
const moment = require("moment");
module.exports = async(oldEmoji, newEmoji) => {

    if (!panel.EmoteProtections) return;
    if (newEmoji.guild.id !== config.Bot.server) return;
    const entry = await newEmoji.guild.fetchAuditLogs({ type: 'EMOJI_UPDATE' }).then(logs => logs.entries.first());
    const id = entry.executor.id;
    let user = newEmoji.guild.members.cache.get(id)
    if(id === config.Bot.owner) return;
    if(entry.executor.id === client.user.id) return;
    if(id === newEmoji.guild.owner.id) return;
    let safezone = config.Guard.safezone || [];
    if(safezone.some(a => user.id === a)) return;
    let safebots = config.Guard.safebots || [];
    if(safebots.some(a => user.id === a)) return;

        if(oldEmoji.name !== newEmoji.name) {
            newEmoji.setName(oldEmoji.name) 
      }

      user.roles.cache.has(config.Guard.booster) ? user.roles.set([config.Guard.booster, config.Guard.jail]) : user.roles.set([config.Guard.jail]).catch();

      let betaSaat = moment(Date.now()).format("HH:mm");
      let betaGün = moment(Date.now()).format("DD");
      let betaAy = moment(Date.now()).format("MM");
      let betaYıl = moment(Date.now()).format("YYYY");
      let betaWile = `${betaGün} ${betaAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${betaYıl}`;

        const beta = new Discord.MessageEmbed().setAuthor(user.user.tag, user.user.avatarURL()).setFooter(newEmoji.guild.name, newEmoji.guild.iconURL()).setColor("BLUE")

  await newEmoji.guild.channels.cache.get(config.Guard.log).send(beta
    .addFields({
      name: `**__Kullanıcı Bilgisi__:**`,
      value: `**\`•\` Kullanıcı: <@${user.id}> \n \`•\` Kullanıcı ID: \`${user.id}\`**`,
      inline: true
    }, {
      name: `**__Emoji Bilgisi__:**`,
      value: `**\`•\` Emoji İsmi: \`${newEmoji.name}\` \n \`•\` Emoji ID: \`${newEmoji.id}\`**`,
      inline: true
    }, {
      name: `**__Tarih Bilgisi__:**`,
      value: `**\`•\` Saat: \`${betaSaat}\` \n \`•\` Gün/Ay/Yıl: \`${betaWile}\`**`,
      inline: false
    })
    .setDescription(`${user} __adlı kullanıcı tarafından bir emoji güncellendi.__ \n\n **__Emojiyi güncelleneyen yetkilinin yetkisi alındı ve emoji eski haline getirildi.__**`));

}; 
  module.exports.configuration = {
      name: "emojiUpdate"
};