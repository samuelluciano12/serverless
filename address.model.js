const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    street: {type: String, require: true},
    neighboord: {type: String,require: true},
    postalCode: {type: String, require: true},
    city: {type: String, require: true},
    state: {type: String, require: true},
    country: {type: String, require: true},
    number: {type: String, require: true},
    complement: {type: String, require: true},
});
module.exports = mongoose.model('Address',addressSchema)