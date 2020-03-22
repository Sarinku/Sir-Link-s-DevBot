const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    let sirIcon = ('https://cdn.discordapp.com/attachments/597186173118447617/691056748819382332/73be86b7f727d91effb3405bc20540b3.jpg');

    let liensEmbed = new Discord.RichEmbed()
        .addField("__**Quelques liens utiles :**__",
            "Retrouvez les liens utiles de Sir Link !"
        )

        .addField("**GitHub**",
            [Cliquez-ici](https://github.com/Sarinku)
        )

        .addField("*Voudriez-vous héberger un de vos fichiers ?*",
            "Grâce à nos services, vous pouvez héberger un fichier de votre choix soit en payant (les prix sont très bas) ou en invitant vos amis et des gens intéressés !"
        )

        .addField("Comment nous rejoindre ?",
            "[Cliquez-ici](https://discord.gg/QFyc8WE)"
        )

        .setThumbnail(asterIcon)
        .setColor('#40A497')
        .setFooter(`Demandé par ${message.author.username} | Fait par Sir Link`, message.author.avatarURL);

    message.delete()
    return message.channel.send(asterEmbed);
};

module.exports.help = {
    name: 'liens'
};
