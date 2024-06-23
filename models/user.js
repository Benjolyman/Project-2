const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
//   builds: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Build'
//   }] only useful if i plan to show all builds created by a single user
});

const User = mongoose.model('User', userSchema);

module.exports = User;