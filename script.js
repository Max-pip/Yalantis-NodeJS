//Create express app
var express = require("express");
var app = express();
var db = require("./database.js");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Server port
var HTTP_PORT = 3000;

//Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

// Root endpoint
app.get("/", (req, res) => {
    res.json({"message": "Connected"})
});

//Insert API endpoints
app.get("/users", (req, res) => {
    var sql = "select * from user"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "data": rows
        })
    });
});

app.post("/user/", (req, res) => {
    var errors=[]
    if (!req.body.name){
        errors.push("Name not entered");
    }
    if (!req.body.lastname){
        errors.push("Lastname not entered");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    if (!req.body.wish1){
        errors.push("Wish1 not entered");
    }
    if (!req.body.wish2){
        errors.push("Wish2 not entered");
    }
    if (!req.body.wish3){
        errors.push("Wish3 not entered");
    }
    if (!req.body.wish4){
        errors.push("Wish4 not entered");
    }
    if (!req.body.wish4){
        errors.push("Wish4 not entered");
    }
    if (!req.body.wish5){
        errors.push("Wish5 not entered");
    }
    if (!req.body.wish6){
        errors.push("Wish6 not entered");
    }
    if (!req.body.wish7){
        errors.push("Wish7 not entered");
    }
    if (!req.body.wish8){
        errors.push("Wish8 not entered");
    }
    if (!req.body.wish9){
        errors.push("Wish9 not entered");
    }
    if (!req.body.wish10){
        errors.push("Wish10 not entered");
    }
    var data = {
        name: req.body.name,
        lastname: req.body.lastname,
        wish1: req.body.wish1,
        wish2: req.body.wish2,
        wish3: req.body.wish3,
        wish4: req.body.wish4,
        wish5: req.body.wish5,
        wish6: req.body.wish6,
        wish7: req.body.wish7,
        wish8: req.body.wish8,
        wish9: req.body.wish9,
        wish10: req.body.wish10,
    }
    var sql ='INSERT INTO user (name, lastname, wish1, wish2, wish3, wish4, wish5, wish6, wish7, wish8, wish9, wish10) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)'
    var params =[data.name, data.lastname, data.wish1, data.wish2, data.wish3, data.wish4, data.wish5, data.wish6, data.wish7, data.wish8, data.wish9, data.wish10]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.lastID
        })
    });
})

app.get("/user/:id", (req, res) => {
    var sql = "select * from user where id = ?"
    var params = [req.params.id]
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({"error": err.message});
            return;
        }
        res.json({
            "message": "success",
            "data": row
        })
    });
})

//Default response for any other request
app.use(function(req, res){
    res.status(404);
})