import { Message, MessageEmbed } from "discord.js";

module.exports = {
    name: 'teamcoach',
    description: 'Role description',
    args: false,
    aliases: ['tc'],
    usage: 'teamcoach',
    guildOnly: true,
    cooldown: 3,
    execute(message: Message, args: string[]) {
        const embeddedMessage = new MessageEmbed;
        embeddedMessage
            .setColor('#f1c40f')
            .setAuthor('HZ - University of Applied Sciences', 'https://vmh-hbo.nl/wp-content/uploads/2018/06/hz-logo.jpg')
            .addFields(
                { name: 'Teamcoach', value:`- Je bent bekend met de taakgerichte en mensgerichte kant van leidinggeven en weet hoe jij je daartoe verhoudt.

                - Je snapt dat taakvolwassenheid (willen en kunnen) bij de teamleden medebepalend is hoe je hen zou kunnen aansturen.

                - Je kan een inschatting maken van de mate van taakvolwassenheid van jouw teamgenoten.

                - Je bent in staat om aan de hand van de piramide van Lencioni te begrijpen welke niveaus in welke volgorde van belang zijn voor het functioneren van het team.
                `}
            )
            .setTimestamp()
        message.channel.send(embeddedMessage);
    },
};