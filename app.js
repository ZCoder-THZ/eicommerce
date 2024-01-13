const express = require('express');
const colors = require('colors');
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv/config')

// custom imports
const router = require('./src/routes/router')

// customs
colors.enable();
const app = express();
const port = process.env.PORT || 4001;

// middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.json())
app.use(router)


app.listen(port, () => {
    console.log(`app is running on port ${port}`.cyan)
})