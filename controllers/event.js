const Event = require('../models/event')

function create (req, res) {
  console.log(req.body)
  const event = new Event(req.body.message)
  event
  .save((err, event) => {
    if (err) return res.status(500).json(err)
    return res.status(201).json(event)
  })
}

function index (req, res) {
  Event.find({}, (err, events) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' })
    return res.status(200).json(events)
  })
}


module.exports = {
  create,
  index
}
