                                                                                                                                                        //jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();

app.set('view engine', "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items = ["Sample item!"];
const workItems= ["Sample item!"];

app.get("/", function(req, res){

    const day = date.getDate();
    res.render("list", {
        listTitle: day,
        newListItems: items
    });
});

app.get("/work", function(req, res){
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    })
});


app.post("/", function(req, res){
    var item = req.body.newItem;
    if(req.body.list === "Work List"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }

});

app.listen(3001, function(){
    console.log("Server started on port[:3001] at: localhost");
});

