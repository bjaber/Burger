var express = require("express");
var PORT  = process.env.PORT||9000;
var app = express();


app.listen(PORT , function(){

console.log("app is listening");

})


app.use(express.static("public"));

app.use(express.urlencoded({extended:true}));

app.use(express.json());

var expressHandlebars = require("express-handlebars")


app.engine(
  "handlebars",expressHandlebars({defaultLayout:"main"})
);

app.set(
  "view engine", "handlebars"
);

//var htmlroutes = require("./controllers/burgerControl.js")

//app.use(htmlroutes)