const {EmbedStyle, AdvancedEmbed} = require('utilscord')
const chalk = require('chalk')
function createMarkdown(title, url) {
    return `[${title}](${url})`;
}

function mentionByID(id) {
    return `<@${id}>`;
}

function createEmbed(interaction, message) {
    const embed = new AdvancedEmbed()
    .setInteraction(interaction)
    .setDescription(message)
    .setStyle(EmbedStyle.Default)

    return embed;
}

function exit() {
    process.exit(0)
}

function log(title, desc) {
    console.log(chalk.bgRed`[${title}]`, desc)
}
module.exports = {
    createMarkdown,
    mentionByID,
    createEmbed,
    exit,
    log
};