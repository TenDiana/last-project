const {Router} = require('express')
const Info = require('../models/Info')
const auth = require('../middleware/auth.middleware')
const router = Router()


router.post('/generate',
    auth,
    async (req, res) => {
    try{

        const {companyName, city, occupation, about, name, position, phone, address} = req.body

        const company = await Info.findOne({ companyName })

        if (company){
            return res.status(400).json({message: 'Компания с таким названием уже существует'})
        }

        const employers =  new Info({
            companyName, city, occupation, about, name, position, phone, address,
            owner: req.user.userId
        })

        await employers.save()

        res.status(201).json({message: 'Компания успешно зарегестрирована'})
        console.log( res.date);

    }catch (e) {
        res.status(500).json({message: 'упccс... чтото пошло не так'})
        console.log(e.message)
    }
})
router.get('/info', async (req, res) => {
    try{
        const users  = await Info.find()
        res.json(users)

    }catch (e) {

    }
})


// router.get('/get', auth, async (req, res) => {
//     try{
//         const data = await Employer.find({ owner: req.user.userId})
//         res.json(data)
//     }catch (e) {
//         res.status(500).json({message: 'упс... чтото пошло не так'})
//     }
// })

// router.get('/:id', async (req, res) => {
//     try{
//
//     }catch (e) {
//         res.status(500).json({message: 'упс... чтото пошло не так'})
//     }
// })

module.exports = router