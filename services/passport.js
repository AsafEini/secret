const passport = require('passport'); // THE PASSPORT LOGIC
const GoogleStrategy = require('passport-google-oauth20').Strategy; //THE STRATEGY WE USE ON THE PASSPORT.. THIS TIME GOOGLE AUTHENTICATION
const keys = require('../config/key');

//clientId 848445928809-v6csha59t9g4160ur6v463lp0tdf114c.apps.googleusercontent.com
//client secret df8Kiszka6H9GpNkLusUavZ3
passport.use(new GoogleStrategy({
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL : '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {console.log(accessToken,refreshToken, profile, done)}));

