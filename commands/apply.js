const Discord = require(`discord.js`);
const reactions = require('../node_modules/reactions');
const bot = require(`../bot.js`);

module.exports.run = async (client, message, args) => {
    const reason = message.content.split(" ").slice(1).join(" ");
    message.guild.createChannel(`application-${message.author.tag}`, "text").then(c => {
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.setParent('APPLICATION_CATEGORY_ID')
        message.reply(`:white_check_mark: Your application has been created, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .setTitle(`Application For ${message.author.username}!`)
        .setDescription(``)
        .addField(`Requirements`, `Fill in application requirements.`, false)
        .addBlankField()
        .addField('Rules', `FILL IN RULES USE \n FOR NEW LINE. EX: 1.Be nice \n2. Be Nicer `, false)
        .setTimestamp();
        c.send({ embed: embed })
        c.send(`Do you accept the rules and wish to continue?`)
            .then(async (msg) => {
            await msg.react(reactions.success)
            .then(() => msg.react(reactions.error))
			.catch(() => console.error('One of the emojis failed to react.'));
            
            
            const collector = msg.createReactionCollector((reaction, user) => user !== client.user);
            
            
            
            collector.on('collect', async (messageReaction) => {
            
  
                
                if (messageReaction.emoji.name === reactions.success) {
        const notbot = messageReaction.users.filter(clientuser => clientuser !== client.user).first();
        await messageReaction.remove(notbot);       
        const defbot = messageReaction.users.filter(clientuser => clientuser == client.user).first();
        await messageReaction.remove(defbot);      
                    
      msg.channel.send('What category are you applying for?').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
        
            let applyfor = messages.first().content;
                    
        msg.channel.send('Please paste your portfolio link.').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
        
            let portfolio = messages.first().content;
        
        
        //send final application
        
        const application = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .setTitle(`Finalized Application For ${message.author.username}!`)
        .setDescription(``)
        .addField(`Name:`, `${notbot}`, false)
        .addField(`Application Category:`, `${applyfor}`, false)
        .addBlankField()
        .addField('Portfolio link:', `${portfolio}`, false)
        .setTimestamp();
        c.send(application);
        c.send(`Thank you for applying. Someone will be reviewing this shortly.`)
        
        let applications = message.guild.channels.find('name', "applications")
        applications.send(application)
        
       })
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('SET ARCHIVED APPLICATIONS CATEGORY ID')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		}); 
      })
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('SET ARCHIVED APPLICATIONS CATEGORY ID')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});
        });
      }); //ask for portfolio
      msg.delete(); // Delete the message
      collector.stop(); // Delete the collector.
      return;
    }
                if (messageReaction.emoji.name === reactions.error) {
      c.send(`You have rejected our rules and outlines. This application will now close`)
      c.overwritePermissions(message.author, {
            SEND_MESSAGES: false,
            READ_MESSAGES: true
        });
       c.setParent('SET ARCHIVED APPLICATIONS CATEGORY ID')             
      
        
        
        
        
        
        
      msg.delete(); // Delete the message
      collector.stop(); // Delete the collector.
      return;
    }
                
                
            
        });
    }); //Sending first accept rules message        
    }).catch(console.error);

}

module.exports.help = {
    name: "apply"
    
}