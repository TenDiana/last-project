const {Schema, model, Types} = require('mongoose')

const Info = new Schema({
    owner: {type: Types.ObjectId, ref: 'User'},
    date: {type: Date, default: Date.now},
    companyName: {type: String},
    city: {type: String},
    occupation: {type: String},
    about: {type: String},
    name: {type: String},
    position: {type: String},
    phone: {type: String},
    address: {type: String},
    photo: {type: String},
    internship:[{ type: Types.ObjectId, ref: 'Internship'}]
})

module.exports = model('Info', Info)