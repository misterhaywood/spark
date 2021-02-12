require('dotenv').config()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const express = require('express');
const router = express.Router();

const User = require("../models").User;

// GET SIGNUP FORM
router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});
  
// GET LOGIN
router.get("/login", (req, res) => {
  res.render("users/login.ejs");
});
  
// POST LOGIN  
router.post("/login", (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((foundUser) => {
           res.redirect(`/users/profile/${foundUser.id}`);
  }) });
  

router.post("/", (req, res) => {
    User.create(req.body)
      .then((newUser) => {
        console.log(`newUser: ${newUser}`)
        res.redirect(`/users/profile/${newUser.id}`);
      })
      .catch((err) => {
        console.log(err);
        res.send(`err ${err}`);
      });
});

module.exports = router;