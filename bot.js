const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : Luffy`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : Luffy ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`League of Legends`,"http://twitch.tv/League of Legends")
client.user.setStatus("dnd")
});

client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
