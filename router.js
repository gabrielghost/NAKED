const express = require('express')
const router = express.Router()
const event = require('./controllers/event')

router.route('/event')
  .post(event.create)
  .get(event.index)

module.exports = router
