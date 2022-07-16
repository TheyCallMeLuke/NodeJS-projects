import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import fetch from 'node-fetch';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('meme')
    .setDescription('Shows a random meme.'),
  async execute(interaction: CommandInteraction) {
    await interaction.deferReply();
    const response = await fetch('https://meme-api.herokuapp.com/gimme/1');
    const data = await response.json();
    const imageUrl = data.memes[0].url;
    await interaction.editReply({ files: [imageUrl] });
  },
};