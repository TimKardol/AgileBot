import { Channel, Message, MessageEmbed } from "discord.js";

module.exports = {
    name: 'teamcoach',
    description: 'Role description',
    args: false,
    aliases: [],
    usage: 'teamcoach',
    guildOnly: true,
    cooldown: 3,
    execute(message: Message, args: string[]) {
        const embeddedMessage = new MessageEmbed;
        embeddedMessage
            .setColor('#f1c40f')
            .setTitle('Teamcoach')
            .setAuthor('HZ - University of Applied Sciences', 'https://vmh-hbo.nl/wp-content/uploads/2018/06/hz-logo.jpg')
            .setDescription('Hier komt een description van de rol')

        message.channel.send(embeddedMessage);
    },
};