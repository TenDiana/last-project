const config = require("config")
const {Router} = require('express');
const roles = Router()
const Role = require('../models/Role')

roles.get('/roles', async (req, res) => {
    const student = new Role()
    const employer = new Role({value: 'EMPLOYER'})
    await student.save()
    await employer.save()
})