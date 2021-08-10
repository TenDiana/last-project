const {Schema, model, Types} = require('mongoose');

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    info: [{type: Types.ObjectId , ref: 'Info'}],
    student: [{type: Types.ObjectId , ref: 'Student'}],
    roles: [{type: String, ref: 'Role'}],
    internship: [{type: Types.ObjectId, ref: 'Internship'}],
});

module.exports = model('User', schema);

