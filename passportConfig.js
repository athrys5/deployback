const express = require('express')
const passport = require('passport')
const LocalStrategy = require("passport-local").Strategy;
const User = require("./models/customer");
const app = express()

module.exports = (passport) => {
/*passport.use(
    "local-signup",
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
        },
        async (email, password, done) => {
            try {
                // check if user exists
                const userExists = await User.findOne({ "email": email });
                if (userExists) {
                    return done(null, false)
                }
                // Create a new user with the user data provided
                // const user = await User.create({ email, password });
                return done(null, user);
            } catch (error) {
                done(error);
            }
        }
    )
);*/
passport.use("local", new LocalStrategy({
    usernameField: "email",
    passwordField: "password",
    },
        async (email, password, done) => {
            try {
                const user = await User.findOne({ email: email, password: password });
                if (!user) return done(null, false);
                return done(null, user);
            } catch (error) {
                console.log(error)
                return done(error, false);
            }
        }
    ));
}