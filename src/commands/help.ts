import { Message, MessageEmbed } from "discord.js";

module.exports = {
    name: 'help',
    description: 'Shows available commands',
    args: false,
    aliases: [],
    usage: 'Help',
    guildOnly: true,
    cooldown: 3,
    execute(message: Message, args: string[]) {
        const embeddedMessage = new MessageEmbed;
        embeddedMessage
            .setColor('#3498db')
            .setAuthor('HZ - University of Applied Sciences', 'https://vmh-hbo.nl/wp-content/uploads/2018/06/hz-logo.jpg')
            .addFields(
                { name: 'Available commands', value:`
                !teamcoach | !tc
                !tracker | !tk
                !onsitecustomer | !osc
                !developer | !dev
                `}
            )
            .setTimestamp()
        message.channel.send(embeddedMessage);
    },
};