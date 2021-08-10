const express = require('express');
const config = require('config');
const mongoose = require('mongoose');

const app = express();
app.use(express.json({ extended: true}))


app.use('/api/auth', require('./routes/auth.router'))

app.use('/api/info', require('./routes/infoEmp.router'))

app.use('/api/stud', require('./routes/student.router'))

app.use('/api/work', require('./routes/internship.router'))


const PORT = config.get('port');

async function start(){
    try{
        await mongoose.connect(config.get('URI'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))
    }catch (e) {
        console.log('Server error', e.message)
        process.exit(1)
    }
}
start()