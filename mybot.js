const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
	
	if (!message.content.startsWith(config.prefix) || message.author.bot) return;
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  	const command = args.shift().toLowerCase();
  	//console.log(command);
	if (command == "dwyane") {
    	message.channel.send("wade");
  	}
  	if(command == "say"){
  		let text = args.slice(0).join(" ");
  		//console.log(text);
  		message.delete();
  		//console.log(text);
  		message.channel.send(text);
	}
  	if (command == "frosted") {
    	message.channel.send("flakes");
  	}
});

client.login(config.token);