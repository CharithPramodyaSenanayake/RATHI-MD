const { fetchUrl } = require("../../lib/Function")

module.exports = {
    name: "stalkcod",
    alias: ["nickcod"],
    use: "<id>",
    desc: "Call of Duty Stalker",
    type: "stalker",
    example: `%prefix%command <id>`,
    start: async(killua, m, { text }) => {
        let fetch = await fetchUrl(global.api("zenz", "/stalker/nickcod", { query: text }, "apikey"))
        let caption = `Call of Duty Stalker :\n\n`
        let i = fetch.result
        caption += `⭔ GameId : ${i.gameId}\n`
        caption += `⭔ UserName : ${i.userName}\n`
        killua.sendText(m.from, caption, m)
    },
    isQuery: true
}