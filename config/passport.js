const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')

module.exports = function(passport) {
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/login/google/callback'
  }, 
  async(accessToken, refreshToken, profile, done) => {
    console.log(profile)
  })); //use profile info to check if it exist in database

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  //passport will serialize and deserialize user instances from session 
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
}