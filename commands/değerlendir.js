const { EmbedBuilder } = require("discord.js");
const { AdvancedEmbed, EmbedStyle } = require("utilscord");
const { ActionRowBuilder, ButtonBuilder, ButtonStyle, userMention } = require('discord.js')
const utils = require('../utils/help')
const db = require('../db.js')
module.exports = {
  name: "değerlendir",
  description: "Beğendiğiniz veya beğenmediğiniz ürünleri değerlendirirsiniz.",
  options: [
    {
        name:"ürün",
        description:"Değerlendirilicek ürünü yaz",
        type:3,
        required:true
    },
    {
        name:"puan",
        description:"Değerlendirdiğin ürünün puanını yaz",
        type:4,
        max_value: 10,
        min_value: 1,
        required:true
    }
  ],
  /**
* @param {import('discord.js').Client} client
* @param {import('discord.js').ChatInputCommandInteraction} interaction
*/
  run: async (client, interaction) => {
    const urun = interaction.options.getString('ürün')
    const puan = interaction.options.getInteger('puan')
    const p2 = puan.toString()

    db.push(`urunler_${interaction.user.id}`, `Ürün: ${urun} \n Puan: ${p2} \n`)
    const embed = utils.createEmbed(interaction,"Merhaba, bizi değerlendirdiğiniz için teşekkürler")
    interaction.reply({embeds:[embed]})
  }
}