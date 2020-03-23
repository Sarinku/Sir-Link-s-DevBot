const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
        bot.on("guildMemberAdd", member => {
            member.guild.channels.find(`name`, "👋┃𝖡ienvenue").send(`👋 Bienvenue ${member.user.username} ! Nous sommes maintenant ${message.guild.memberCount}`)
        });
};
