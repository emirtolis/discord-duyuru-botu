const { Collection, EmbedBuilder } = require("discord.js");
const db = require("croxydb");
const { readdirSync } = require("fs");
// Altyapı by: Emir Tolis -yt.com/@emirtolis

module.exports = async(client, interaction) => {

  if(interaction.isChatInputCommand()) {

    if (!interaction.guildId) return;

    readdirSync('./commands').forEach(f => {

      const cmd = require(`../commands/${f}`);

      if(interaction.commandName.toLowerCase() === cmd.name.toLowerCase()) {

        return cmd.run(client, interaction, db);


      }


    });



  }

};
// Altyapı by: Emir Tolis -yt.com/@emirtolis
// Altyapı by: Emir Tolis -yt.com/@emirtolis
// Altyapı by: Emir Tolis -yt.com/@emirtolis
