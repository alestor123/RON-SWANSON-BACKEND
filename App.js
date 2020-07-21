var express = require('express'), //importing modules
    app = express(),
    quote = require("./src/quotes"),
    port = process.env.PORT || 80; //setting port with or use env port or use port 80

app.get('/', (req, res) =>{         //adding route
        var num = Math.floor(Math.random() * Math.floor(quote.length)); //setting math random to num will give a random number between 0 and array length 
        res.json(quote[num]) //sending json quote
});
app.listen(port, () => console.log(`server running at ${port}`)) //listening to port and printing port 
