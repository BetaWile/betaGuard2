const Discord = require("discord.js");
const config = require("../Settings/Config.json");
const panel = require("../Settings/Panel.json");
const moment = require("moment");
module.exports = async(channel) => {

    if (!panel.ChannelProtections) return;
    if (channel.guild.id !== config.Bot.server) return;
    const entry = await channel.guild.fetchAuditLogs({ type: "CHANNEL_CREATE" }).then(logs => logs.entries.first());
    const id = entry.executor.id;
    let user = channel.guild.members.cache.get(id)
    if(id === config.Bot.owner) return;
    if(id === channel.guild.owner.id) return;
    if(entry.executor.id === client.user.id) return;
    let safezone = config.Guard.safezone || [];
    if(safezone.some(a => user.id === a)) return;
    let safebots = config.Guard.safebots || [];
    if(safebots.some(a => user.id === a)) return;

        await channel.delete()

      user.roles.cache.has(config.Guard.booster) ? user.roles.set([config.Guard.booster, config.Guard.jail]) : user.roles.set([config.Guard.jail]).catch();

      let betaSaat = moment(Date.now()).format("HH:mm");
      let betaGün = moment(Date.now()).format("DD");
      let betaAy = moment(Date.now()).format("MM");
      let betaYıl = moment(Date.now()).format("YYYY");
      let betaWile = `${betaGün} ${betaAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${betaYıl}`;
    const beta = new Discord.MessageEmbed().setAuthor(user.user.tag, user.user.avatarURL()).setFooter(channel.guild.name, channel.guild.iconURL()).setColor("BLUE")

      await channel.guild.channels.cache.get(config.Guard.log).send(beta
.addFields({
  name: `**__Kullanıcı Bilgisi__:**`,
  value: `**\`•\` Kullanıcı: <@${user.id}> \n \`•\` Kullanıcı ID: \`${user.id}\`**`,
  inline: true
}, {
  name: `**__Kanal Bilgisi__:**`,
  value: `**\`•\` Kanal İsmi: \`${channel.name}\` \n \`•\` Kanal ID: \`${channel.id}\`**`,
  inline: true
}, {
  name: `**__Tarih Bilgisi__:**`,
  value: `**\`•\` Saat: \`${betaSaat}\` \n \`•\` Gün/Ay/Yıl: \`${betaWile}\`**`,
  inline: false
})
.setDescription(`${user} __adlı kullanıcı tarafından bir kanal oluşturuldu.__ \n\n **__Kanalı oluşturan kullanıcının yetkisi alındı ve kanal silindi.__**`));

}; 
  module.exports.configuration = {
      name: "channelCreate"
};