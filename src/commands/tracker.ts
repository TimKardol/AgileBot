import { Message, MessageEmbed } from "discord.js";

module.exports = {
    name: 'tracker',
    description: 'Role description',
    args: false,
    aliases: ['tk'],
    usage: 'tracker',
    guildOnly: true,
    cooldown: 3,
    execute(message: Message, args: string[]) {
        const embeddedMessage = new MessageEmbed;
        embeddedMessage
            .setColor('#f1c40f')
            .setAuthor('HZ - University of Applied Sciences', 'https://vmh-hbo.nl/wp-content/uploads/2018/06/hz-logo.jpg')
            .addFields(
                { name: 'Tracker', value:`- Je breidt je skills uit.

                - Je bent eindverantwoordelijk voor het maken van de sprintplanning (in samenwerking met het team en mn de OSC) en dit duurt minimaal 2 uur. Je bereidt dit goed voor.

                - Je houdt een burn down chart bij zodat jij in 1 oogopslag weet wat de status is van de realisatie van de sprint t.o.v. de planning ervan zodat je tijdig kan bijsturen.

                - Je zorgt voor een goede rol overdracht naar de volgende tracker.

                - Je gebruikt hiervoor Githubfuncties zoals je ze kent. Daarnaast zal je een manier moeten vinden om een burndown chart bij te houden
                `}
            )
            .setTimestamp()
        message.channel.send(embeddedMessage);
    },
};