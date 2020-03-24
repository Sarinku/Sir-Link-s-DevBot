const Discord = require('discord.js');

module.exports.run = (client, message, args) => {
    if (!args[0]) return message.channel.send('Syntaxe: .suggestion <question>');

    const pollEmbed = new Discord.RichEmbed()
        .setTitle(`Sondage crée par ${message.author.username}`)
        .setColor('#dc143c')
        .setFooter('Appuyez sur les réactions ci-dessous.')
        .setDescription(args.join(' '));

    let pollChannel = message.guild.channels.find(`name`, '💡┃𝖲uggestions');
        if (!pollChannel) {
            return message.channel.send(
                "Channel 'suggestions' introuvable. Veuillez créer ce channel !"
            )
        }
    
    message.delete().catch();

    return pollChannel.send(pollEmbed).then(x => {
        x.react('✔️')
        x.react('❌')
    });
};

module.exports.help = {
    name: 'suggestion'
};
