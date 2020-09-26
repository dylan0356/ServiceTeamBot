const Discord = require(`discord.js`);
const reactions = require('../node_modules/reactions');
const bot = require(`../bot.js`);

module.exports.run = async (client, message, args) => {
    const reason = message.content.split(" ").slice(1).join(" ");
    message.guild.createChannel(`HR-${message.author.tag}`, "text").then(c => {
        let role2 = message.guild.roles.find("name", "@everyone");
        c.overwritePermissions(role2, {
            SEND_MESSAGES: false,
            READ_MESSAGES: false
        });
        c.overwritePermissions(message.author, {
            SEND_MESSAGES: true,
            READ_MESSAGES: true
        });
        c.setParent('SET HR TICKET CATEGORY ID')
        message.reply(`:white_check_mark: Your HR has been created, #${c.name}.`);
        c.send(`Thank you ${message.author} for opening a HR ticket. Please describe your issue in full and a manager will be with you shortly :smiley:. (Do not ping managers after opening ticket)`)

})
}

module.exports.help = {
    name: "hr"
    
}