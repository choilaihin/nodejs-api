var express = require("express");

var app = express();
app.listen(8080, () => {
 console.log("Server running on port 8080");
});

function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

app.get("/", async (req, res) => {
  res.send("Welcome to TOTO/4D generator, go to /toto or /4d");
});

app.get("/toto", (req, res) => {
 do{
 rand_toto = Math.floor(Math.random() * 50);
 } while (!rand_toto);
 res.send(`Your TOTO number is ${pad(rand_toto,2)}.`);
});

app.get("/4d", (req, res) => {
 rand_4d = Math.floor(Math.random() * 10000);
 res.send(`Your 4D number is ${pad(rand_4d,4)}.`);
});

app.get('*',function (req, res) {
        res.redirect('/');
    });