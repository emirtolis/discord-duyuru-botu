const { PermissionsBitField, EmbedBuilder, ButtonStyle, ChannelType, ActionRowBuilder, SelectMenuBuilder, ModalBuilder, TextInputBuilder, TextInputStyle, InteractionType, SelectMenuInteraction, ButtonBuilder, AuditLogEvent } = require("discord.js");
const { Client, GatewayIntentBits, Partials } = require("discord.js");
const INTENTS = Object.values(GatewayIntentBits);
const PARTIALS = Object.values(Partials);
const Discord = require("discord.js")
const louritydb = require("croxydb")
const client = new Client({
    intents: INTENTS,
    allowedMentions: {
        parse: ["users", "roles", "everyone"]
    },
    partials: PARTIALS,
    retryLimit: 3
});
// Altyapı by: Emir Tolis -yt.com/@emirtolis
global.client = client;
client.commands = (global.commands = []);

const { readdirSync } = require("fs")
const { TOKEN } = require("./config.json");
readdirSync('./commands').forEach(f => {
    if (!f.endsWith(".js")) return;

    const props = require(`./commands/${f}`);

    client.commands.push({
        name: props.name.toLowerCase(),
        description: props.description,
        options: props.options,
        dm_permission: props.dm_permission,
        type: 1
    });

    console.log(`[COMMAND] ${props.name} komutu yüklendi.`)

});
readdirSync('./events').forEach(e => {

    const eve = require(`./events/${e}`);
    const name = e.split(".")[0];

    client.on(name, (...args) => {
        eve(client, ...args)
    });
    console.log(`[EVENT] ${name} eventi yüklendi.`)
});


client.login(TOKEN)

// Konsol'a Hatayı Yazdırıyoruz
process.on("unhandledRejection", (reason, p) => {
    console.log(reason, p);
})
// Bu kısım bir hata olduğunda botun kapanmasını sağlar
process.on("unhandledRejection", async (error) => {
    return console.log("Bir hata oluştu! " + error)
})
// Altyapı by: Emir Tolis -yt.com/@emirtolis
// Altyapı by: Emir Tolis -yt.com/@emirtolis
