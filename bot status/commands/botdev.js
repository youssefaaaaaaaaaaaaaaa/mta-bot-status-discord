const Discord = require("discord.js");

module.exports = {
  name: "bot",
  async run(client, message, args) {
    let embed = new Discord.MessageEmbed()

      .setColor("RED")
	  .addField("Bot name :", `${client.user.tag}`,true)
	  .addField("developed by :", "<@835252367704195142>",true)
	  .addField("Server :", "https://discord.gg/7SdHVbVZ",true)
    message.channel.send(embed);
  },
};
