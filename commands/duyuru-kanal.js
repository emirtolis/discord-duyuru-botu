const Discord = require('discord.js');
const { EmbedBuilder, PermissionsBitField } = require("discord.js");
const louritydb = require("croxydb");
// Altyapı by: Emir Tolis -yt.com/@emirtolis
module.exports = {
    name: "duyuru-kanal",
    description: "Duyuru gönderilecek kanalı ayarlarsın.",
    type: 1,
    options: [
        {
            name: "kanal",
            description: "Kanal seçin.",
            type: 7,
            required: true,
            channel_types: [0]
        },
    ],
    run: async (client, interaction) => {
// Altyapı by: Emir Tolis -yt.com/@emirtolis
        const yetki_embed = new EmbedBuilder()
            .setColor("Red")
            .setDescription("Bu komudu kullanabilmek için `Yönetici` yetkisine sahip olmalısın.")
// Altyapı by: Emir Tolis -yt.com/@emirtolis
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) return interaction.reply({ embeds: [yetki_embed], ephemeral: true })
// Altyapı by: Emir Tolis -yt.com/@emirtolis
        const channel = interaction.options.getChannel('kanal')
// Altyapı by: Emir Tolis -yt.com/@emirtolis
        const ayar_embed = new EmbedBuilder()
            .setColor("Green")
            .setDescription(`Duyuru kanalı başarıyla ayarlandı!`)

        louritydb.set(`duyuru_channel_${interaction.guild.id}`, channel.id)
        return interaction.reply({ embeds: [ayar_embed] })
    }
};
// Altyapı by: Emir Tolis -yt.com/@emirtolis
// Altyapı by: Emir Tolis -yt.com/@emirtolis
// Altyapı by: Emir Tolis -yt.com/@emirtolis
// Altyapı by: Emir Tolis -yt.com/@emirtolis
// Altyapı by: Emir Tolis -yt.com/@emirtolis
// Altyapı by: Emir Tolis -yt.com/@emirtolis
// Altyapı by: Emir Tolis -yt.com/@emirtolis
// Altyapı by: Emir Tolis -yt.com/@emirtolis
// Altyapı by: Emir Tolis -yt.com/@emirtolis
// Altyapı by: Emir Tolis -yt.com/@emirtolis
// Altyapı by: Emir Tolis -yt.com/@emirtolis
// Altyapı by: Emir Tolis -yt.com/@emirtolis
