import { createServer } from "node:http"
import fs from "node:fs/promises"
import path from "node:path"

const port = 8000
const __dirname = import.meta.dirname

const server = createServer( async (req, res) => {
    if (req.url == "/script.js") {
        res.setHeader("Content-type", "text/javascript")
        const pathToScriptJS = path.join(__dirname, "script.js")
        const scriptJS = await fs.readFile(pathToScriptJS)
        res.end(scriptJS)
    }
    else if (req.url == "/scoreboard.json") {
        res.setHeader("Content-type", "text/event-stream")
        res.setHeader("Cache-Control", "no-cache")
        res.setHeader("Connection", "keep-alive")
        const pathToScoreboard = path.join(__dirname, "scoreboard.json")
        setInterval(async () => {
            const scoreboard = await fs.readFile(pathToScoreboard, "utf8")
            const json_data = JSON.parse(scoreboard)
            json_data[0].home_score = Math.floor(Math.random() * 10) + 1
            json_data[0].away_score = Math.floor(Math.random() * 10) + 1
            res.write(
            `data: ${JSON.stringify({event: 'score-changed', home_score: json_data[0].home_score, away_score: json_data[0].away_score })}\n\n`
        )
        }, 2000)
    }
    else {
        res.setHeader("Content-type", "text/html")
        const pathToIndexHTML = path.join(__dirname, "index.html")
        const indexHTML = await fs.readFile(pathToIndexHTML, "utf8")
        res.end(indexHTML)
    }
})

server.listen(port, () => console.log(`running on: ${port}`))