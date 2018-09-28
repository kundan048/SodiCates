var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

//root route
router.get("/", function(req, res) {
  res.render("index.ejs");
});

// show register form
router.get("/register", function(req, res) {
  res.render("register");
});

//handle sign up logic
router.post("/register", function(req, res) {
  var newUser = new User({username: req.body.email});
  User.register(newUser, req.body.password, function(err, user) {
    if (err) {
      req.flash("error", err.message);
      return res.render("register");
    }
    passport.authenticate("local")(req, res, () => {
      var newUserDetails = new UserDeatil({
        user: {
          id: req.user.id,
          username: req.user.email
        },
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        address: req.body.address,
        profileImage: req.body.profileImage
      });

      UserDeatil.create(newUserDetails, (err, newUserDetail) => {
        if (err) {
          res.render("error.ejs", {
            msg: err,
            title: "Error "
          });
          res.render("new");
        } else {

          newUserDetail.save();
          req.flash("success", "Welcome to Samidha " + user.username);
          res.redirect("/");
        }
      });
    });
  });
});
  //show login form
  router.get("/login", function(req, res) {
    res.render("login");
  });

  //handling login logic
  router.post("/login", passport.authenticate("local", {
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
  }), function(req, res) {});

  // logout route
  router.get("/logout", function(req, res) {
    req.logout();
    req.flash("success", "Logged you out!");
    // res.redirect("/campgrounds");
  });

  module.exports = router;
