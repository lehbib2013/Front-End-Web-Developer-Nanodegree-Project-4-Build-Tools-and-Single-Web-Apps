const dotenv = require('dotenv');
dotenv.config();


// You could call it aylienapi, or anything else
var meaningapi = {
    application_key: process.env.API_KEY
};
const apiInfos = {
    application_url: "https://api.meaningcloud.com/sentiment-2.1?of=json&lang=auto&key=",
    application_key: process.env.API_KEY
}

var path = require('path')
const express = require('express')


const app = express()
/* Dependencies */
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO-Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/readConfig', function (req, res) {
    res.send(apiInfos)
})
