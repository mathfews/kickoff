import { createServer } from "node:http"

const port = 8000

const server = createServer((req, res) => {
    res.write("kickoff")
    res.end()
})

server.listen(port, () => console.log(`running on: ${port}`))