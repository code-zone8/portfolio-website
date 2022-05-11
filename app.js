//imports
const express = require('express');
const path = require('path');
const app = express()
const PORT = process.env.PORT || 5000;

// static files
app.use(express.static(path.join(__dirname, 'public')))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/html', express.static(__dirname + 'public/html'))

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/projects', (req, res) => {
    res.sendFile(__dirname + '/views/projects.html')
})



// listen on port
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

