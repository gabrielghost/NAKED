const passport = require('passport')
const config = require('../config')
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt
const LocalStrategy = require('passport-local')
const db = require('../db')
const bcrypt = require('./bcrypt')

// Create local strategy
const localOptions = { usernameField: 'email' }
const localLogin = new LocalStrategy(localOptions, function (email, password, done) {
  const text = `SELECT * FROM "User"."User" WHERE "Email" = '${email}';`
  db.query(text, (err, response) => {
    if (err) { return done(err) }
    if (response.rowCount === 0) { return done(null, false) }
    let user = response.rows[0]
    bcrypt.comparePassword(password, user.Password, function (err, isMatch) {
      if (err) { return done(err) }
      if (!isMatch) { return done(null, false) }

      return done(null, user)
    })
  })
})

// Setup options JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
}

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
  // See if the user ID in the payload exists in our database.
  // If it does, call 'done' with that object
  // If not, call 'done' without object
  const text = `SELECT * FROM "User"."User" WHERE "Id" = '${payload.sub}';`
  db.query(text, (err, response) => {
    if (err) { return done(err, false) }
    // if found someone then call done with user, if not, run done without user
    if (response) {
      done(null, response)
    } else {
      done(null, false)
    }
  })
})

// Tell passport to use this strategy
passport.use(jwtLogin)
passport.use(localLogin)
