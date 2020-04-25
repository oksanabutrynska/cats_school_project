require('dotenv').config();

let express = require('express');
let mongoose = require('mongoose');

let app = express();
app.use((req, resp, next) => {
    console.log(req.url)
    next();
})
app.use(express.static('./web'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('web/index.html');
})

app.post('/subscribe', (req, res) => {
    console.log(req.body.email);
    res.sendStatus(400);
})

const port = process.env.port || 80;
app.listen(port, () => {console.log(process.env.port);console.log(`server started at ${port}`)});