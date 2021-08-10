const {Schema, model} = require('mongoose')

const Role = new Schema({
    value: {type: String, default: ""}
})

module.exports = model("Role", Role)