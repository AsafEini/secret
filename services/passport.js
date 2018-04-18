const passport = require('passport'); // THE PASSPORT LOGIC
const GoogleStrategy = require('passport-google-oauth20').Strategy; //THE STRATEGY WE USE ON THE PASSPORT.. THIS TIME GOOGLE AUTHENTICATION
const keys = require('../config/key');
const mongoose = require('mongoose');

const UsersModel = mongoose.model('users');


passport.use(new GoogleStrategy({
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL : '/auth/google/callback'
},
    (accessToken, refreshToken, profile, done) => {
        UsersModel.findOne({googleId: profile.id})
            .then((existingUser) => {
                if(existingUser){
                    //already Exists no need to create a new user
                } else {
                    new UsersModel({googleId: profile.id}).save()
                }
            });


    }));

