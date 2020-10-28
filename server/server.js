const express = require('express')
const dotenv = require('dotenv')
const path = require('path')
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')

//require routes for auth
const authRoute = require('../routes/auth')

const connectDB = require('../config/db') //connect MongoDB with server


//load config
dotenv.config({ path: './config/config.env' })

//passport config
require('../config/passport')(passport)

connectDB()

const app = express()

const PORT = process.env.PORT || 3030

app.use(bodyParser.json())

//check isLogged in? 

//Session middleware
app.use( //session is saved when login success. expression session doc
  session({
  secret: 'keyboard cat',
  resave: false, //session not saved if nothing modified 
  saveUninitialized: false, //not saved until data is stored
  })
)

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//serve everything inside build folder. (static?)
app.use('/build', express.static(path.resolve(__dirname, '../build'))); //serve everything inside build folder

//root directory sends it to index.html
app.get('/', (req, res) => {  
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});
//routes for login auth
app.use('/login', authRoute)

//create LogOut?


//set listen ports
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

module.exports = app;