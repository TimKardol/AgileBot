import { Message, MessageEmbed } from "discord.js";

module.exports = {
    name: 'developer',
    description: 'Role description',
    args: false,
    aliases: ['dev'],
    usage: 'developer',
    guildOnly: true,
    cooldown: 3,
    execute(message: Message, args: string[]) {
        const embeddedMessage = new MessageEmbed;
        embeddedMessage
            .setColor('#3498db')
            .setAuthor('HZ - University of Applied Sciences', 'https://vmh-hbo.nl/wp-content/uploads/2018/06/hz-logo.jpg')
            .addFields(
                { name: 'Developer', value:`- Je breidt je skills uit.

                - Je kent de Agile waarden en past deze actief toe.
                
                - Bij complexe of lastige problemen ben je in staat om vooraf een methodiek (plan van aanpak) te bedenken en ook methodisch uit te voeren. 
                
                - Je reflecteert op zowel aanpak als resultaat.
                
                - Je kunt je zelf motiveren.
                `}
            )
            .setTimestamp()
        message.channel.send(embeddedMessage);
    },
};