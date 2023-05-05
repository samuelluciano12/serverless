const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fullname: {type: String, require: true},
    birthdate: {type: Date,require: true},
    username: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
});
module.exports = mongoose.model('Usuario',userSchema)