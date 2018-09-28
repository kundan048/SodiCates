var express			 		= require('express');
	/*mongoose		 		= require('mongoose'),
	bodyParser		 		= require('body-parser'),
	passport		 		= require('passport'),
	LocalStrategy	 		= require('passport-local'),
	passportLocalMongoose	= require('passport-local-mongoose'),
	expressSession 			= require('express-session'),
	Application_t1_t1		= require('./models/application_t1_t1'),
	User					= require('./models/user');

	// require("dotenv/config");
	

// mongoose.connect(process.env.CODE);
mongoose.connect("mongodb://localhost/Samidha");*/

var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));
//app.use(bodyParser.urlencoded({extended : true}));

app.get("/", function(req, res) {
	res.render("index");
});

app.get("/login", function(req, res) {
	res.render("login");
});


// Listening to the server

app.listen(process.env.PORT || 3000, function(){
    console.log(`Samidha Server is listening on 3000`);
});