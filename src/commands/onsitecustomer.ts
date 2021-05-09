import { Message, MessageEmbed } from "discord.js";

module.exports = {
    name: 'onsitecustomer',
    description: 'Role description',
    args: false,
    aliases: ['osc'],
    usage: 'onsitecustomer',
    guildOnly: true,
    cooldown: 3,
    execute(message: Message, args: string[]) {
        const embeddedMessage = new MessageEmbed;
        embeddedMessage
            .setColor('#f1c40f')
            .setAuthor('HZ - University of Applied Sciences', 'https://vmh-hbo.nl/wp-content/uploads/2018/06/hz-logo.jpg')
            .addFields(
                { name: 'Onsite Customer', value:`- Je breidt je skills uit.

                - Je managet verwachtingen naar de opdrachtgever toe. 

                - Je laat de impact zien van wijzigingen.

                - Je adviseert vervolgstappen.
                `}
            )
            .setTimestamp()
        message.channel.send(embeddedMessage);
    },
};