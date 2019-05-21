mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  age: Number,
  userName: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
//    validator: function(v) {
//      return /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
//    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;