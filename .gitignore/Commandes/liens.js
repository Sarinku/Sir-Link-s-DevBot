const Discord = require('discord.js');

module.exports.run = (bot, message, args) => {
    let sirIcon = ('https://cdn.discordapp.com/attachments/597186173118447617/691056748819382332/73be86b7f727d91effb3405bc20540b3.jpg');

    let liensEmbed = new Discord.RichEmbed()
        .addField("__**Quelques liens utiles :**__",
            "Retrouvez les liens utiles de Sir Link !"
        )

        .addField("**GitHub**",
            "[Cliquez-ici](https://github.com/Sarinku)\n",
        )

        .addField("**TouTube | Discord",
            "[Chaîne YouTube](https://www.youtube.com/channel/UCcklO754DiV1pZFe6N5wSEw?view_as=subscriber)\n"+
            "[✩ ΛsтєгDєѵ『</>』](https://discord.gg/QFyc8WE)\n"+
            "[La Liste Noire v2](https://discord.gg/nvFEcJB)\n",
        )

        .addField("Page Facebook",
            "[Cliquez-ici](https://www.facebook.com/Sir-Link-Dev-436656903521898/)\n",
        )
    
        .addField("Twitter",
            "[Cliquez-ici](https://twitter.com/_SirLink)\n",        
         )

        .setThumbnail(sirIcon)
        .setColor('#40A497')
        .setFooter(`Demandé par ${message.author.username} | Fait par Sir Link`, message.author.avatarURL);

    message.delete()
    return message.channel.send(liensEmbed);
};

module.exports.help = {
    name: 'liens'
};
