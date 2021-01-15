const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!')
});
client.on('message', message => {
	if (message.content === `${prefix}mcinfo`) {
		const embed = new Discord.MessageEmbed()
		.setTitle('Here is the Minecraft server info')
		.setAuthor('Hrafnsvart 2.0')
		.setColor('#e0ae5b')
		.addFields({ name: 'IP',
			value: 'nordicland.minehut.gg'})
		.addFields({ name: 'Rules',
			value: '1. No griefing, screwing over others, etc. Use common sense \n 2. Every applicable discord rule applies to the server i.e dont argue with staff, certain banned topics, racism, etc. \n 3. If you have questions or suggestions, direct them to Hrafnsvart, he is the server operator \n 4. This server is using a free slot, which means it is not the best quality. If it gets more activity and people are willing to donate, we may be able to get a better quality slot \n 5. Do not ask for certain permissions or permission groups. \n These rules may be edited at any time'})
		message.channel.send({embed});
}
});
client.login(token);