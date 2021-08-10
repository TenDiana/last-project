const {Schema, model, Types} = require('mongoose');

const Internship = new Schema({
    owner: {type: Types.ObjectId, ref: 'User'},
    called: {type: String},
    request: {type: String},
    time: {type: String},
    salary: {type: String},
    skills: {type: String},
    work: {type: String},
});

module.exports = model('Internship', Internship);