
require("dotenv/config");



const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_TOKEN;
const moodClass=require("./Mood");
const Mood=new moodClass();
const MongoConnection=require("./mongodb.js");
const mongoConn=new MongoConnection();


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

client.on('message', msg => {
    let commands=Mood.wordParser(msg);
    
    switch(commands[0]){
        case "count": // Reply Total Members Of The Server
            msg.reply(`Total members of ${msg.guild.name} : `+Array.from(client.users).length);
            console.log("Count command worked!");
            mongoConn.openConnection();
            
        break;
        case "getmood":
            Mood.getMood(msg);
        break;



        case "ping":
            msg.reply('pong');
        break;
       
    }
    
});
   
client.login(token);