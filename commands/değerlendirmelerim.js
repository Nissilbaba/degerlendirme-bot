const { EmbedBuilder } = require("discord.js");
const { AdvancedEmbed, EmbedStyle } = require("utilscord");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, userMention } = require('discord.js')
const utils = require('../utils/help')
const db = require('../db.js')
module.exports = {
  name: "değerlendirmelerim",
  description: "Değerlendirmelerinizi gösterir.",
  options: [],
  /**
* @param {import('discord.js').Client} client
* @param {import('discord.js').ChatInputCommandInteraction} interaction
*/
  run: async (client, interaction) => {
   //terminal aç
    const veri = db.get(`urunler_${interaction.user.id}`)

    if(!veri) {
        
    const embed = utils.createEmbed(interaction,"Hiç değerlendirmeniz yok.")
    return interaction.reply({embeds:[embed]})
    }

    const embed = utils.createEmbed(interaction,`Değerlendirmeleriniz: \n\n ${veri.join(`\n`)}`)
    interaction.reply({embeds:[embed]})
  }
}