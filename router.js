const express = require('express')
const router = express.Router()
const event = require('./controllers/event')
const spotify = require('./controllers/spotify_auth')

router.route('/event')
  .post(event.create)
  .get(event.index)
router.route('/login')
  .get(spotify.login)
router.route('/refresh_token')
  .get(spotify.refresh_token)
router.route('/callback')
  .get(spotify.callback)

module.exports = router
