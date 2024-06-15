const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const respMethod =  (req, res) => {
    const ac = req.query['ac']
    if (!ac) {
        res.sendFile(path.join(__dirname, 'files', 'class.xml'))
    } else if (ac === 'videolist') {
        const ids = req.query['ids']
        if (ids === '1') {
            res.sendFile(path.join(__dirname, 'files', 'video1.xml'))
        } else if (ids === '2') {
            res.sendFile(path.join(__dirname, 'files', 'video2.xml'))
        } else {
            res.sendFile(path.join(__dirname, 'files', 'videos.xml'))
        }
    }
}

app.get('/', respMethod)
app.post('/', respMethod)

app.get('/site.json', (req, res) => {
    res.sendFile(path.join(__dirname, 'files', 'site.json'))
})

app.get('/cover.png', (req, res) => {
    res.sendFile(path.join(__dirname, 'files', 'cover.png'))
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
