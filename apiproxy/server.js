const port = 38000

require('dotenv').config();

const express = require('express')
const axios = require('axios')
const cors = require('cors')

const app = express()
app.use(cors())

axios.defaults.baseURL = process.env.BE_API_URL
axios.defaults.auth = {
  username: process.env.BE_API_USER,
  password: process.env.BE_API_PW
}

app.listen(port, ()=> console.log(`API Proxy is running on ${port}`))

app.get('/owner', (req,res)=>{    
    const options = {
        method: 'GET',
        url: '/api/owner',
    };

    axios.request(options).then(function (response) {
        console.log(response.data)
        res.json(response.data);
    }).catch(function (error) {
        console.error(error);
    });
})