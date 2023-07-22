const express = require('express');
const app = express();
const cors = require('cors');
const api = require("./data.json")

app.use(cors({
    origin: '*'
}));

const whitelist = ['http://developer1.com', 'http://developer2.com']
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error())
        }
    }
}

app.use(cors({
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));

app.get('/api', cors(), (req, res, next) => {
    res.send(api);
});

app.get('/', cors(), (req, res, next) => {
    res.send("<h1>Welcome</h1>");
});

app.listen(6069);