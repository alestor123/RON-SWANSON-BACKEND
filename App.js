var express = require('express'),
    app = express(),
    quote = require("./src/quotes"),
    port = process.env.PORT || 80;

app.get('/', (req, res) => {
        var num = Math.floor(Math.random() * Math.floor(quote.length));
        res.json(quote[num])
});
