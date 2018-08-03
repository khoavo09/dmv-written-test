var express = require('express');
bodyParser 		= require('body-parser'),
ejs 			= require('ejs'),
mongoose		= require('mongoose');

var PORT = process.env.PORT || 3000;


var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));




app.listen(PORT, process.env.IP, function(){
	console.log("Server started on PORT: " + PORT);
});
