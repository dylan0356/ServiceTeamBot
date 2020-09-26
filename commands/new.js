const Discord = require(`discord.js`);
const reactions = require('../node_modules/reactions');



module.exports.run = async (client, message, args) => {
    const reason = message.content.split(" ").slice(1).join(" ");
    
    
    //set channel id of where you want -new tickets to go
    const ticketchannel = ``
    
    //set the channel id where freelancers can chat
    const ticketchat = ``
    
    //Set role ID's of freelancers
    
    const webDeveloper = ``
    const graphicDesign = ``
    const building = ``
    const setups = ``
    const botDevelopment = ``
    const other = ``
    const motionDesign = ``
    const developer = ``
    
    
    
    
    const buttons = [
        reactions.zero, reactions.one, reactions.two, reactions.three, reactions.four, 
        reactions.five, reactions.six, reactions.seven, reactions.eight, reactions.nine,
    ];
    
    //if (!message.guild.roles.exists("name", "Freelancer")) return message.channel.send(`Server does not have role set correctly., This error has been logged. \nPlease contact bot developer <@251557870603075586>`);
    if (message.guild.channels.exists("name", "ticket-" + `${message.author.tag}`)) return message.reply(`You already have a ticket open.`);
    message.guild.createChannel(`ticket-${message.author.tag}`, "text").then(c => {
        let role = message.guild.roles.find("name", "Manager");
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.setParent('SET TICKET CATEGORY ID')
        
        message.reply(`:white_check_mark: Your ticket has been created, #${c.name}.`);
        const embed = new Discord.RichEmbed()
        .setColor(0xCF40FA)
        .setTitle(`Ticket For ${message.author.username}!`)
        .setDescription(`What category of ticket is this for?`)
        .addField(`:one:`, `Website Development`, true)
        .addField(`:two:`, `Graphic Design/Illustrator`, true)
        .addField(`:three:`, `Motion Design`, true)
        .addField(`:four:`, `Minecraft Building`, true)
        .addField(`:five:`, `Minecraft Setups and Discord Setups`, true)
        .addField(`:six:`, `Discord Bot Development`, true)
        .addField(`:seven:`, `Minecraft Configurations`, true)
        .addField(`:eight:`, `Minecraft Development`, true)
        .addField(`:nine:`, `Other Development`, true)
        .setTimestamp();
        c.send({ embed: embed }).then(async (msg) => {
            await msg.react(reactions.one)
            .then(() => msg.react(reactions.two))
			.then(() => msg.react(reactions.three))
            .then(() => msg.react(reactions.four))
            .then(() => msg.react(reactions.five))
            .then(() => msg.react(reactions.six))
            .then(() => msg.react(reactions.seven))
            .then(() => msg.react(reactions.eight))
            .then(() => msg.react(reactions.nine))
			.catch(() => console.error('One of the emojis failed to react.'));
            
            
            const collector = msg.createReactionCollector((reaction, user) => user !== client.user);
            
            
            
            collector.on('collect', async (messageReaction) => {
                

    if (messageReaction.emoji.name === reactions.one) { //reaction 1------------------------------------------------------------------
        msg.channel.send('You have opened a Web Development ticket')
        msg.channel.send('Please provide a description of what you require. (Do not upload photos straight to discord only use links.)').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            let notes = messages.first().content;
        msg.channel.send('What is your budget? (Type quote for a quote)').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            msg.channel.send(`Thank you. Please wait for a requested freelancer!`);
        
            const budget = messages.first().content;
        
        
        
        
        let web = new Discord.RichEmbed()
        .setDescription("Press the check to claim the commission")
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Description", `${notes}`)
        .addField("Requested Freelancer",`<@&${webDeveloper}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        
        tickets.send(`<@&${webDeveloper}>`)
        tickets.send(web).then(async (msg) => {
        await msg.react(reactions.success)
        
        const collector1 = msg.createReactionCollector((reaction, user) => user !== client.user);
        collector1.on('collect', async (messageReaction) => {
            
            
            
        if (messageReaction.emoji.name === reactions.success) {
        
        
            
            
        let client1 = messageReaction.users
        
        const notbot = messageReaction.users.filter(clientuser => clientuser !== client.user).first();
        await messageReaction.remove(notbot);  
            //check if they have role id
            if(!message.member.roles.find(r => r.name === "SET NAME OF ROLE YOU WANT TO BE ABLE TO CLAIM")) return client.channels.get(`${ticketchat}`).send(`${notbot} You do not have the requested role for that ticket`);
            
        const defbot = messageReaction.users.filter(clientuser => clientuser == client.user).first();
        await messageReaction.remove(defbot); 
   
            
        let web1 = new Discord.RichEmbed()
        .setDescription(`This commission has been claimed by ${notbot} .`)
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Budget", `${budget}`)
        .addField("Requested Freelancer",`<@&${webDeveloper}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        message.author.send(`Freelancer ${notbot} has taken your ticket. ${message.author}`);
        
        msg.edit(web1)
        c.overwritePermissions(notbot, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });    
            
        } //checking if success emote was pressed
        });
        });
        })
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //note start
		})
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //budget start
      msg.delete(); // Delete the message
      collector.stop(); // Delete the collector.
      return;
    } //reactions.one end
                
    if (messageReaction.emoji.name === reactions.two) { //reaction two --------------------------------------------------------------
      msg.channel.send('You have opened a Graphic Design or Illustration ticket')
        msg.channel.send('What is your budget? (Type quote for a quote)').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            let budget = messages.first().content;
        msg.channel.send('Please provide a description of what you require. Please specify if either for Graphic Design or an Illustration. (Do not upload photos straight to discord only use links.').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            msg.channel.send(`Thank you. Please wait for a requested freelancer!`);
        
            const notes = messages.first().content;
        
        
        
        
        let web = new Discord.RichEmbed()
        .setDescription("Press the check to claim the commission")
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Notes", `${notes}`)
        .addField("Requested Freelancer",`<@&${graphicDesign}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        
        tickets.send(`<@&${graphicDesign}>`)
        tickets.send(web).then(async (msg) => {
        await msg.react(reactions.success)
        
        const collector1 = msg.createReactionCollector((reaction, user) => user !== client.user);
        collector1.on('collect', async (messageReaction) => {
            
            
            
        if (messageReaction.emoji.name === reactions.success) {
        
        
            
            
        let client1 = messageReaction.users
        
        const notbot = messageReaction.users.filter(clientuser => clientuser !== client.user).first();
        await messageReaction.remove(notbot);  
            //check if they have role id
            if(!message.member.roles.find(r => r.name === "SET NAME OF ROLE YOU WANT TO BE ABLE TO CLAIM")) return client.channels.get(`${ticketchat}`).send(`${notbot} You do not have the requested role for that ticket`);
            
        const defbot = messageReaction.users.filter(clientuser => clientuser == client.user).first();
        await messageReaction.remove(defbot); 
   
            
        let web1 = new Discord.RichEmbed()
        .setDescription(`This commission has been claimed by ${notbot} .`)
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Budget", `${budget}`)
        .addField("Requested Freelancer",`<@&${graphicDesign}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        message.author.send(`Freelancer ${notbot} has taken your ticket. ${message.author}`);
        
        msg.edit(web1)
        c.overwritePermissions(notbot, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });    
            
        } //checking if success emote was pressed
        });
        });
        })
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //note start
		})
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //budget start
      msg.delete(); // Delete the message
      collector.stop(); // Delete the collector.
      return;
    }
    if (messageReaction.emoji.name === reactions.three) { // reaction three -----------------------------------------------------------
      msg.channel.send('You have opened a Motion Design ticket')
        msg.channel.send('What is your budget? (Type quote for a quote)').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            let budget = messages.first().content;
        msg.channel.send('Please provide a description of what you require. (Do not upload photos straight to discord only use links.').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            msg.channel.send(`Thank you. Please wait for a requested freelancer!`);
        
            const notes = messages.first().content;
        
        
        
        
        let web = new Discord.RichEmbed()
        .setDescription("Press the check to claim the commission")
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Description", `${notes}`)
        .addField("Requested Freelancer",`<@&${motionDesign}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        
        tickets.send(`<@&${motionDesign}>`)
        tickets.send(web).then(async (msg) => {
        await msg.react(reactions.success)
        
        const collector1 = msg.createReactionCollector((reaction, user) => user !== client.user);
        collector1.on('collect', async (messageReaction) => {
            
            
            
        if (messageReaction.emoji.name === reactions.success) {
        
        
            
            
        let client1 = messageReaction.users
        
        const notbot = messageReaction.users.filter(clientuser => clientuser !== client.user).first();
        await messageReaction.remove(notbot);  
            //check if they have role id
            if(!message.member.roles.find(r => r.name === "SET NAME OF ROLE YOU WANT TO BE ABLE TO CLAIM")) return client.channels.get(`${ticketchat}`).send(`${notbot} You do not have the requested role for that ticket`);
            
        const defbot = messageReaction.users.filter(clientuser => clientuser == client.user).first();
        await messageReaction.remove(defbot); 
   
            
        let web1 = new Discord.RichEmbed()
        .setDescription(`This commission has been claimed by ${notbot} .`)
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Budget", `${budget}`)
        .addField("Requested Freelancer",`<@&${motionDesign}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        message.author.send(`Freelancer ${notbot} has taken your ticket. ${message.author}`);
        
        msg.edit(web1)
        c.overwritePermissions(notbot, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });    
            
        } //checking if success emote was pressed
        });
        });
        })
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //note start
		})
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //budget start
      msg.delete(); // Delete the message
      collector.stop(); // Delete the collector.
      return;
    }
    if (messageReaction.emoji.name === reactions.four) { //reaction four ---------------------------------------------------------------
      msg.channel.send('You have opened a Building ticket')
        msg.channel.send('What is your budget? (Type quote for a quote)').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            let budget = messages.first().content;
        msg.channel.send('Please provide a description of what you require. (Do not upload photos straight to discord only use links.').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            msg.channel.send(`Thank you. Please wait for a requested freelancer!`);
        
            const notes = messages.first().content;
        
        
        
        
        let web = new Discord.RichEmbed()
        .setDescription("Press the check to claim the commission")
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Description", `${notes}`)
        .addField("Requested Freelancer",`<@&${building}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        
        tickets.send(`<@&${building}>`)
        tickets.send(web).then(async (msg) => {
        await msg.react(reactions.success)
        
        const collector1 = msg.createReactionCollector((reaction, user) => user !== client.user);
        collector1.on('collect', async (messageReaction) => {
            
            
            
        if (messageReaction.emoji.name === reactions.success) {
        
        
            
            
        let client1 = messageReaction.users
        
        const notbot = messageReaction.users.filter(clientuser => clientuser !== client.user).first();
        await messageReaction.remove(notbot);  
            //check if they have role id
            if(!message.member.roles.find(r => r.name === "SET NAME OF ROLE YOU WANT TO BE ABLE TO CLAIM")) return client.channels.get(`${ticketchat}`).send(`${notbot} You do not have the requested role for that ticket`);
            
        const defbot = messageReaction.users.filter(clientuser => clientuser == client.user).first();
        await messageReaction.remove(defbot); 
   
            
        let web1 = new Discord.RichEmbed()
        .setDescription(`This commission has been claimed by ${notbot} .`)
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Budget", `${budget}`)
        .addField("Requested Freelancer",`<@&${building}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        message.author.send(`Freelancer ${notbot} has taken your ticket. ${message.author}`);
        
        msg.edit(web1)
        c.overwritePermissions(notbot, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });    
            
        } //checking if success emote was pressed
        });
        });
        })
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //note start
		})
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //budget start
      msg.delete(); // Delete the message
      collector.stop(); // Delete the collector.
      return;
    }
    if (messageReaction.emoji.name === reactions.five) { //reactuion.five ----------------------------------------------------------------------------------------------------
      msg.channel.send('You have opened a Minecraft Setups and Discord Setups ticket')
        msg.channel.send('What is your budget? (Type quote for a quote)').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            let budget = messages.first().content;
        msg.channel.send('Please provide a description of what you require. Specify if either for Minecraft or Discord (Do not upload photos straight to discord only use links.').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            msg.channel.send(`Thank you. Please wait for a requested freelancer!`);
        
            const notes = messages.first().content;
        
        
        
        
        let web = new Discord.RichEmbed()
        .setDescription("Press the check to claim the commission")
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Description", `${notes}`)
        .addField("Requested Freelancer",`<@&${setups}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        
        tickets.send(`<@&${setups}>`)
        tickets.send(web).then(async (msg) => {
        await msg.react(reactions.success)
        
        const collector1 = msg.createReactionCollector((reaction, user) => user !== client.user);
        collector1.on('collect', async (messageReaction) => {
            
            
            
        if (messageReaction.emoji.name === reactions.success) {
        
        
            
            
        let client1 = messageReaction.users
        
        const notbot = messageReaction.users.filter(clientuser => clientuser !== client.user).first();
        await messageReaction.remove(notbot);  
            //check if they have role id
            if(!message.member.roles.find(r => r.name === "SET NAME OF ROLE YOU WANT TO BE ABLE TO CLAIM")) return client.channels.get(`${ticketchat}`).send(`${notbot} You do not have the requested role for that ticket`);
            
        const defbot = messageReaction.users.filter(clientuser => clientuser == client.user).first();
        await messageReaction.remove(defbot); 
   
            
        let web1 = new Discord.RichEmbed()
        .setDescription(`This commission has been claimed by ${notbot} .`)
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Budget", `${budget}`)
        .addField("Requested Freelancer",`<@&${setups}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        message.author.send(`Freelancer ${notbot} has taken your ticket. ${message.author}`);
        
        msg.edit(web1)
        c.overwritePermissions(notbot, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });    
            
        } //checking if success emote was pressed
        });
        });
        })
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //note start
		})
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //budget start
      msg.delete(); // Delete the message
      collector.stop(); // Delete the collector.
      return;
    }
    if (messageReaction.emoji.name === reactions.six) { //reaction.six -------------------------------------------------------------------------------------------------
      msg.channel.send('You have opened a Bot Development ticket')
        msg.channel.send('What is your budget? (Type quote for a quote)').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            let budget = messages.first().content;
        msg.channel.send('Please provide a description of what you require. (Do not upload photos straight to discord only use links.').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            msg.channel.send(`Thank you. Please wait for a requested freelancer!`);
        
            const notes = messages.first().content;
        
        
        
        
        let web = new Discord.RichEmbed()
        .setDescription("Press the check to claim the commission")
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Description", `${notes}`)
        .addField("Requested Freelancer",`<@&${botDevelopment}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        
        tickets.send(`<@&${botDevelopment}>`)
        tickets.send(web).then(async (msg) => {
        await msg.react(reactions.success)
        
        const collector1 = msg.createReactionCollector((reaction, user) => user !== client.user);
        collector1.on('collect', async (messageReaction) => {
            
            
            
        if (messageReaction.emoji.name === reactions.success) {
        
        
            
            
        let client1 = messageReaction.users
        
        const notbot = messageReaction.users.filter(clientuser => clientuser !== client.user).first();
        await messageReaction.remove(notbot);  
            //check if they have role id
            if(!message.member.roles.find(r => r.name === "SET NAME OF ROLE YOU WANT TO BE ABLE TO CLAIM")) return client.channels.get(`${ticketchat}`).send(`${notbot} You do not have the requested role for that ticket`);
            
        const defbot = messageReaction.users.filter(clientuser => clientuser == client.user).first();
        await messageReaction.remove(defbot); 
   
            
        let web1 = new Discord.RichEmbed()
        .setDescription(`This commission has been claimed by ${notbot} .`)
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Budget", `${budget}`)
        .addField("Requested Freelancer",`<@&${botDevelopment}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        message.author.send(`Freelancer ${notbot} has taken your ticket. ${message.author}`);
        
        msg.edit(web1)
        c.overwritePermissions(notbot, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });    
            
        } //checking if success emote was pressed
        });
        });
        })
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //note start
		})
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //budget start
      msg.delete(); // Delete the message
      collector.stop(); // Delete the collector.
      return;
    }            
    if (messageReaction.emoji.name === reactions.seven) { //reaction.seven -----------------------------------------------------------------------------------------
      msg.channel.send('You have opened a Configuration ticket')
        msg.channel.send('What is your budget? (Type quote for a quote)').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            let budget = messages.first().content;
        msg.channel.send('Please provide a description of what you require. (Do not upload photos straight to discord only use links.').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            msg.channel.send(`Thank you. Please wait for a requested freelancer!`);
        
            const notes = messages.first().content;
        
        
        
        
        let web = new Discord.RichEmbed()
        .setDescription("Press the check to claim the commission")
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Description", `${notes}`)
        .addField("Requested Freelancer",`<@&${other}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        
        tickets.send(`<@&${other}>`)
        tickets.send(web).then(async (msg) => {
        await msg.react(reactions.success)
        
        const collector1 = msg.createReactionCollector((reaction, user) => user !== client.user);
        collector1.on('collect', async (messageReaction) => {
            
            
            
        if (messageReaction.emoji.name === reactions.success) {
        
        
            
            
        let client1 = messageReaction.users
        
        const notbot = messageReaction.users.filter(clientuser => clientuser !== client.user).first();
        await messageReaction.remove(notbot);  
            //check if they have role id
            if(!message.member.roles.find(r => r.name === "SET NAME OF ROLE YOU WANT TO BE ABLE TO CLAIM")) return client.channels.get(`${ticketchat}`).send(`${notbot} You do not have the requested role for that ticket`);
            
        const defbot = messageReaction.users.filter(clientuser => clientuser == client.user).first();
        await messageReaction.remove(defbot); 
   
            
        let web1 = new Discord.RichEmbed()
        .setDescription(`This commission has been claimed by ${notbot} .`)
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Budget", `${budget}`)
        .addField("Requested Freelancer",`<@&${other}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        message.author.send(`Freelancer ${notbot} has taken your ticket. ${message.author}`);
        
        msg.edit(web1)
        c.overwritePermissions(notbot, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });    
            
        } //checking if success emote was pressed
        });
        });
        })
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //note start
		})
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //budget start
      msg.delete(); // Delete the message
      collector.stop(); // Delete the collector.
      return;
    }
                if (messageReaction.emoji.name === reactions.eight) { //reaction.eight -----------------------------------------------------------------------------------------
      msg.channel.send('You have opened a Plugin Development ticket')
                    msg.channel.send('What is your budget? (Type quote for a quote)').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            let budget = messages.first().content;
        msg.channel.send('Please provide a description of what you require. (Do not upload photos straight to discord only use links.').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            msg.channel.send(`Thank you. Please wait for a requested freelancer!`);
        
            const notes = messages.first().content;
        
        
        
        
        let web = new Discord.RichEmbed()
        .setDescription("Press the check to claim the commission")
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Description", `${notes}`)
        .addField("Requested Freelancer",`<@&${developer}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        
        tickets.send(`<@&${developer}>`)
        tickets.send(web).then(async (msg) => {
        await msg.react(reactions.success)
        
        const collector1 = msg.createReactionCollector((reaction, user) => user !== client.user);
        collector1.on('collect', async (messageReaction) => {
            
            
            
        if (messageReaction.emoji.name === reactions.success) {
        
        
            
            
        let client1 = messageReaction.users
        
        const notbot = messageReaction.users.filter(clientuser => clientuser !== client.user).first();
        await messageReaction.remove(notbot);  
            //check if they have role id
            if(!message.member.roles.find(r => r.name === "SET NAME OF ROLE YOU WANT TO BE ABLE TO CLAIM")) return client.channels.get(`${ticketchat}`).send(`${notbot} You do not have the requested role for that ticket`);
            
        const defbot = messageReaction.users.filter(clientuser => clientuser == client.user).first();
        await messageReaction.remove(defbot); 
   
            
        let web1 = new Discord.RichEmbed()
        .setDescription(`This commission has been claimed by ${notbot} .`)
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Budget", `${budget}`)
        .addField("Requested Freelancer",`<@&${developer}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        message.author.send(`Freelancer ${notbot} has taken your ticket. ${message.author}`);
        
        msg.edit(web1)
        c.overwritePermissions(notbot, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });    
            
        } //checking if success emote was pressed
        });
        });
        })
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //note start
		})
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //budget start
      msg.delete(); // Delete the message
      collector.stop(); // Delete the collector.
      return;
    }
       if (messageReaction.emoji.name === reactions.nine) { //reaction.nine -----------------------------------------------------------------------------------------
      msg.channel.send('You have opened a Other Development ticket')
                    msg.channel.send('What is your budget? (Type quote for a quote)').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            let budget = messages.first().content;
        msg.channel.send('Please provide a description of what you require. (Do not upload photos straight to discord only use links.').then(() => {
	const filter = m => message.author.id === m.author.id;

	msg.channel.awaitMessages(filter, { time: 60000, maxMatches: 1, errors: ['time'] })
		.then(messages => {
			msg.channel.send(`You've entered: ${messages.first().content}`);
        
            msg.channel.send(`Thank you. Please wait for a requested freelancer!`);
        
            const notes = messages.first().content;
        
        
        
        
        let web = new Discord.RichEmbed()
        .setDescription("Press the check to claim the commission")
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Description", `${notes}`)
        .addField("Requested Freelancer",`<@&${developer}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        
        tickets.send(`<@&${developer}>`)
        tickets.send(web).then(async (msg) => {
        await msg.react(reactions.success)
        
        const collector1 = msg.createReactionCollector((reaction, user) => user !== client.user);
        collector1.on('collect', async (messageReaction) => {
            
            
            
        if (messageReaction.emoji.name === reactions.success) {
        
        
            
            
        let client1 = messageReaction.users
        
        const notbot = messageReaction.users.filter(clientuser => clientuser !== client.user).first();
        await messageReaction.remove(notbot);  
            //check if they have role id
            if(!message.member.roles.find(r => r.name === "SET NAME OF ROLE YOU WANT TO BE ABLE TO CLAIM")) return client.channels.get(`${ticketchat}`).send(`${notbot} You do not have the requested role for that ticket`);
            
        const defbot = messageReaction.users.filter(clientuser => clientuser == client.user).first();
        await messageReaction.remove(defbot); 
   
            
        let web1 = new Discord.RichEmbed()
        .setDescription(`This commission has been claimed by ${notbot} .`)
        .setColor("#15f153")
        .addField("Client", `${message.author} with ID: ${message.author.id}`)
        .addField("Budget", `${budget}`)
        .addField("Time", message.createdAt)
        .addField("Budget", `${budget}`)
        .addField("Requested Freelancer",`<@&${developer}>`)
        
        let tickets = message.guild.channels.find('name', "tickets")
        if(!tickets) return message.channel.send(`${message.author} Can't find tickets channel.`)
        message.delete().catch(O_o=>{});
        
        message.author.send(`Freelancer ${notbot} has taken your ticket. ${message.author}`);
        
        msg.edit(web1)
        c.overwritePermissions(notbot, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });    
            
        } //checking if success emote was pressed
        });
        });
        })
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //note start
		})
		.catch(() => {
			msg.channel.send('You did not enter any input! This ticket will now archive. Please reopen a new one and enter more input.');
        msg.channel.send(`Ticket closed and archived`)
            msg.channel.setParent('603728461584138251')
                    
                    c.overwritePermissions(message.author, {
                    SEND_MESSAGES: false,
                    READ_MESSAGES: true
                    });
		});

        
        
        
        }); //budget start
      msg.delete(); // Delete the message
      collector.stop(); // Delete the collector.
      return;
    }         
    
    if (messageReaction.emoji.name === reactions.x) {
      msg.delete(); // Delete the message
      collector.stop(); // Delete the collector.
      return;
    }
    const notbot = messageReaction.users.filter(clientuser => clientuser !== client.user).first();
    await messageReaction.remove(notbot);
  });
            
        });
        
        
    }).catch(console.error);
    
}

module.exports.help = {
    name: "new"
    
}