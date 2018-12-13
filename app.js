const token = require('./token')
const utils = require('./utils')
const express = require('express')
const morgan = require('morgan');
// const fs = require('fs');
const app = express()

// var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

// app.use(morgan('short', {stream: accessLogStream}));
app.use(morgan('short'))


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/getToken', (req, res) => {
    let _token = ''
    try {
        _token = token.generateToken()
    }
    catch(e){
        res.send(utils.responseFormat(e,1))
    }
    res.send(utils.responseFormat(_token,0))
    // res.send(_token)
})

app.listen(8060, () => console.log('Example app listening on port 8060!'))