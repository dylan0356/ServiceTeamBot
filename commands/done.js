const Discord = require(`discord.js`);
const reactions = require('../node_modules/reactions');


module.exports.run = async (client, message, args) => {
                if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
        // Confirm delete - with timeout (Not command)
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`${message.author} Do not have permission`);
        message.channel.send(`Thank you for choosing leatrio. Lets move onto a review.`)
            .then((m) => {
                message.channel.awaitMessages(response => response.content === '/confirm', {
                        max: 1,
                        time: 10000,
                        errors: ['time'],
                    })
                    .then((collected) => {
            const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .setTitle(`Thank you for choosing leatrio`)
        .setDescription(`How many stars would you rate us?`)
        .setTimestamp();              
            message.channel.send(embed).then(async (msg) => {
            await msg.react(reactions.one)
            .then(() => msg.react(reactions.two))
			.then(() => msg.react(reactions.three))
            .then(() => msg.react(reactions.four))
            .then(() => msg.react(reactions.five))
			.catch(() => console.error('One of the emojis failed to react.')); 
                    
                const collector = msg.createReactionCollector((reaction, user) => user !== client.user);
            
            
            
            collector.on('collect', async (messageReaction) => {
                
                if (messageReaction.emoji.name === reactions.one) {
      msg.delete(); // Delete the message
      collector.stop(); // Delete the collector.
      return;
    }
                if (messageReaction.emoji.name === reactions.two) {
      msg.delete(); // Delete the message
      collector.stop(); // Delete the collector.
      return;
    }
                if (messageReaction.emoji.name === reactions.three) {
      msg.delete(); // Delete the message
      collector.stop(); // Delete the collector.
      return;
    }
                if (messageReaction.emoji.name === reactions.four) {
      msg.delete(); // Delete the message
      collector.stop(); // Delete the collector.
      return;
    }
                if (messageReaction.emoji.name === reactions.five) {
      msg.delete(); // Delete the message
      collector.stop(); // Delete the collector.
      return;
    }
                
            });
                    });
                    });
                    })
                    .then((collected) => {
                        message.channel.setParent('603728461584138251')
                    message.channel.send(`Ticket closed and archived`)
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: false
                    });
                    })
                    .catch(() => {
                        console.log(err)
                    });
            
}

module.exports.help = {
    name: "done"
    
}