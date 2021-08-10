const {Router} = require('express');
const bcrypt = require('bcryptjs')
const config = require("config")
const jWt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const Role = require('../models/Role')
const router = Router()

router.post(
    '/register',
    [
      check('email', 'Некорректный email').isEmail(),
      check('password', 'Минимальная длина пароля 6 символов').isLength({min: 6})
    ],
    async (req, res) => {
    try{
        const errors = validationResult(req)

        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации'
            })
        }
        const {email, password, roles} = req.body

        const candidate = await User.findOne({email})

        if (candidate){
            return res.status(400).json({message: 'Пользователь с таким email уже существует'})
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const userRole = await Role.findOne({value: roles})
        const user = new User({email, password: hashedPassword, roles: [userRole.value]})

        await user.save()

        res.status(201).json({message: 'Пользователь успешно создан!'})
        console.log( res.date);

    }catch (e) {
        res.status(500).json({message: 'упс... чтото пошло не так'})
    }
});


router.post(
    '/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите верный пароль').exists()
    ],
    async (req, res) => {
    try{
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при входе в систему'
            })
        }

        const {email, password} = req.body

        const user = await User.findOne({ email })

        if (!user){
            return res.status(400).json({message: 'Пользователь не найден'})
        }
        const hasPassword = await bcrypt.compare(password, user.password)

        if (!hasPassword){
            return res.status(400).json({message: 'Неверный пароль, попробуйте снова'})
        }

        const token = jWt.sign(
            {
                userId: user.id,
                userRole: user.roles
            },
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        )
        res.json({token, userId: user.id, userRole: user.roles})


    } catch (e) {
        res.status(500).json({message: 'упс... чтото пошло не так'})
    }

});

router.get('/users', async (req, res) => {
    try{
        const users  = await User.find()
        res.json(users)

    }catch (e) {

    }
})


module.exports = router