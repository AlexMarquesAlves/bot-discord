/* eslint-disable @typescript-eslint/no-var-requires */
const { SlashCommandBuilder } = require('discord.js')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('greeting')
    .setDescription('Saudação'),

  async execute(interaction) {
    await interaction.reply(`olá! `)
  },
}
