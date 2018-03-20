const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eventSchema = new Schema({
  timeDate: { type: String, trim: true },
  duration: { type: String, trim: true },
  kind: { type: String, trim: true },
  kindType: { type: String, trim: true },
  url: { type: String, trim: true },
  url2: { type: String, trim: true },
  title: { type: String, trim: true },
  description: { type: String, trim: true },
  location: { type: String, trim: true },
  recipient: { type: String, trim: true }
}, {
  timestamps: true
})

const ModelClass = mongoose.model('event', eventSchema)

module.exports = ModelClass
