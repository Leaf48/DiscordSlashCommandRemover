const {REST} = require("@discordjs/rest")
const {Routes} = require("discord-api-types/v9")
const {Client, Intents} = require("discord.js")

TOKEN = ""
clientId = ""
guildId = ""

const rest = new REST().setToken(TOKEN)
rest.get(Routes.applicationGuildCommands(clientId, guildId))
    .then(data =>{
        const promises = []
        for(const cmd of data){
            const deleteURL = `${Routes.applicationGuildCommands(clientId, guildId)}/${cmd.id}`
            promises.push(rest.delete(deleteURL))
        }
        return Promise.all(promises)
    })


