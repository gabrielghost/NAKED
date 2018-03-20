const bcrypt = require('bcrypt-nodejs')

exports.hash = function (password) {
  bcrypt.genSalt(10, function (err, salt) {
    if (err) { return err }
    bcrypt.hash(password, salt, null, function (err, hash) {
      if (err) { return err }
      if (hash) { return hash }
    })
  })
}

exports.comparePassword = async function (candidatePassword, password, callback) {
  bcrypt.compare(candidatePassword, password, function (err, isMatch) {
    if (err) { return callback(err) }

    callback(null, isMatch)
  })
}
