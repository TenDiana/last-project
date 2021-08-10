const {Schema, model, Types} = require('mongoose')

const Student = new Schema({
    owner: {type: Types.ObjectId, ref: 'User'},
    name: {type: String},
    types: {type: String,},
    prof: {type: String},
    place: {type: String},
    lastYear: {type: String}
})

module.exports = model('Student', Student)