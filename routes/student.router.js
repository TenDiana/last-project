const {Router} = require('express')
const Student = require('../models/Student')
const auth = require('../middleware/auth.middleware')
const {check, validationResult} = require('express-validator')
const router = Router()

router.post('/data',
    auth,
    [
      check('lastYear', 'Заполните все поля').isString()
    ],
    async (req, res) =>{
    try{

        const errors = validationResult(req)

        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }

        const {name, types, prof, place, lastYear} = req.body

        const firstName = await Student.findOne({name})

        if(firstName){
            return res.status(400).json({message: 'Введенные данные уже сохранены'})
        }


        const student = new Student({ name, types, prof, place, lastYear, owner: req.user.userId})


        await student.save()


        res.status(201).json({message: 'Данные сохранены'})
        console.log( res.date);


    }catch (e) {
        console.log(e.message)
        res.status(500).json({message: 'снова сломалось'})
    }

})

router.get('/get', async (req, res) => {
    try{
        const users  = await Student.find()
        res.json(users)

    }catch (e) {

    }
})

module.exports = router