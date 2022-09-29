const express = require('express')
const app = express();
const fs = require('fs')
app.get('/', async (req, res) => {
    const file = fs.readFileSync("./index.html", { encoding: 'utf-8' })

    res.send(file)
})
app.get('/hello', (req, res) => {
    res.send('hello world')
})
app.use('/assets', express.static('assets'))

app.listen(7024, () => console.log('Web Server Port 7024'))