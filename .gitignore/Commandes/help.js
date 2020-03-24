const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL;
        
        let helpEmbed = new Discord.RichEmbed()
        .addField("__**Liste des commandes :**__",
            "Menu d'aide du Bot ! Apprenez toutes les commandes :"
        )

        .addField("__**Commandes**__",
            "`/ping` : Affiche la latence du bot !\n"+
            "`/liens` : Affiche différents liens utiles pour Paladium !\n"+
            "`/aster` : Affiche une pub de ΛsтєгDєѵ !\n"+
            "`/suggestion` : Permet de réaliser une suggestion !\n",
        )

        .setFooter(`Fait par Sir Link | Demandé par ${message.author.username}`, message.author.avatarURL)
        .setThumbnail(botIcon)
        .setColor("#dc143c");

    message.delete();
    return message.channel.send(helpEmbed);
}

module.exports.help = {
    name: "help"
}
