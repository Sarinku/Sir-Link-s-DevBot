const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    let asterIcon = ('https://cdn.discordapp.com/attachments/690969558143598602/690998594714599515/image0.png');

    let asterEmbed = new Discord.RichEmbed()
        .addField("__**ΛsтєгDєѵ :**__",
            "Viens jeter un coup d'oeil 😉"
        )

        .addField("*Voudriez-vous un bot unique adapté pour votre serveur ?*",
            "Grâce à nos services, vous pourrez avoir un magnifique bot Discord soit en payant (les prix sont très bas) ou en invitant vos amis et des gens intéressés !"
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
    name: 'aster'
};