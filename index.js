const cors = require('cors')
const express = require('express');
const User = require('./model/user');
const { mongoConnect } = require('./mongo_config');
const sendMail = require('./nodemailer_config');

const app = express()


app.use(cors())

app.use(express.json());

// routes

app.post('/save_user_data', async (req, res)=> {
    const data = req.body
    try {
        const user = await User.create(data)
        // await sendMail(user.name, user.username)
        res.json({status: 'success'})
    } catch (error) {
        res.json({status: 'fail', error: error.message})
    }
})

app.get('/', async (req, res) => {
    res.json({status: 'success'})
})

// app listen on port 5000

app.listen(6100, () => {
    console.log("app listening at port 6100");
})