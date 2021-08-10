const {Router} = require('express')
const Internship = require('../models/Internship')
const auth = require('../middleware/auth.middleware')
const router = Router()

router.post('/ship',
    auth,
    async (req, res) => {
    try{


         const {called, request, time, salary, skills, work} = req.body

        if (!work ){
            return res.status(400).json({message: 'введите данные'})
        }

        const internship = new Internship({called, request, time, salary, skills, work, owner: req.user.userId})

        await internship.save()

        res.status(201).json({message: 'Стажировка создана!'})
        console.log( res.date);

    }catch (e) {
        console.log(e.message)
        res.status(500).json({message: 'что-то пошло не так'})

    }
})

router.get('/all',  async (req, res)=> {
    try{
        const ships  = await Internship.find()
        res.json(ships)
    }catch (e) {

    }
})

module.exports = router