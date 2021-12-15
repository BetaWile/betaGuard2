const Discord = require("discord.js");
const config = require(".././Settings/Config.json");
const panel = require("../Settings/Panel.json");
const moment = require("moment");
module.exports = async(oldGuild, newGuild) => {

    if (!panel.GuildProtections) return;
    if (newGuild.id !== config.Bot.server) return;
    const entry = await newGuild.fetchAuditLogs({ type: 'GUILD_UPDATE' }).then(logs => logs.entries.first());
    const id = entry.executor.id;
    let user = newGuild.members.cache.get(id)
    if(id === config.Bot.owner) return;
    if(entry.executor.id === client.user.id) return;
    if(id === newGuild.owner.id) return;  
    let safezone = config.Guard.safezone || [];
    if(safezone.some(a => user.id === a)) return;
    let safebots = config.Guard.safebots || [];
    if(safebots.some(a => user.id === a)) return;

      if (newGuild.name !== oldGuild.name) {
        newGuild.setName(oldGuild.name);
    }

      if (newGuild.iconURL({dynamic: true, size: 2048}) !== oldGuild.iconURL({dynamic: true, size: 2048})) {
        newGuild.setIcon(oldGuild.iconURL({dynamic: true, size: 2048}));
    }

      if (oldGuild.banner !== newGuild.banner) {
        await newGuild.setBanner(oldGuild.bannerURL({ size: 4096 }));
    }

      if (oldGuild.region !== newGuild.region) {
        await newGuild.setRegion(oldGuild.region);
    }

    user.roles.cache.has(config.Guard.booster) ? user.roles.set([config.Guard.booster, config.Guard.jail]) : user.roles.set([config.Guard.jail]).catch();

    let betaSaat = moment(Date.now()).format("HH:mm");
    let betaGün = moment(Date.now()).format("DD");
    let betaAy = moment(Date.now()).format("MM");
    let betaYıl = moment(Date.now()).format("YYYY");
    let betaWile = `${betaGün} ${betaAy.replace("01", "Ocak").replace("02", "Şubat").replace("03", "Mart").replace("04", "Nisan").replace("05", "Mayıs").replace("06", "Haziran").replace("07", "Temmuz").replace("08", "Ağustos").replace("09", "Eylül").replace("10", "Ekim").replace("11", "Kasım").replace("12", "Aralık")} ${betaYıl}`;

    const beta = new Discord.MessageEmbed().setAuthor(user.user.tag, user.user.avatarURL()).setFooter(newGuild.name, newGuild.iconURL()).setColor("BLUE")

  await newGuild.channels.cache.get(config.Guard.log).send(beta
    .addFields({
      name: `**__Kullanıcı Bilgisi__:**`,
      value: `**\`•\` Kullanıcı: <@${user.id}> \n \`•\` Kullanıcı ID: \`${user.id}\`**`,
      inline: true
    }, {
      name: `**__Susunucu Bilgisi__:**`,
      value: `**\`•\` Sunucu İsmi: \`${newGuild.name}\` \n \`•\` Sunucu ID: \`${newGuild.id}\`**`,
      inline: true
    }, {
      name: `**__Tarih Bilgisi__:**`,
      value: `**\`•\` Saat: \`${betaSaat}\` \n \`•\` Gün/Ay/Yıl: \`${betaWile}\`**`,
      inline: false
    })
    .setDescription(`${user} __adlı kullanıcı sunucuda bir değişiklik yaptı.__ \n\n **__Sunucu eski haline getirildi ve güncelleyen kullanıcının rolleri alındı.__**`));

}; 
  module.exports.configuration = {
      name: "guildUpdate"
};