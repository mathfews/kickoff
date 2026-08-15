import { createServer } from "node:http"
import fs from "node:fs/promises"
import path from "node:path"
import { fstatSync } from "node:fs"

const port = 8000
const __dirname = import.meta.dirname

const server = createServer( async (req, res) => {
    if (req.url == "/script.js") {
        res.setHeader("Content-type", "text/javascript")
        const pathToScriptJS = path.join(__dirname, "script.js")
        const scriptJS = await fs.readFile(pathToScriptJS)
        res.end(scriptJS)
    }
    else {
        res.setHeader("Content-type", "text/html")
        const pathToIndexHTML = path.join(__dirname, "index.html")
        const indexHTML = await fs.readFile(pathToIndexHTML, "utf8")
        res.end(indexHTML)
    }
})

server.listen(port, () => console.log(`running on: ${port}`))