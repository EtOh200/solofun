const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require('path')
const passport = require('passport')
const session = require('express-session')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const MongoStore = require('connect-mongo')(session)

const { ensureAuth, ensureGuest } = require('../routes/logged')

//require routes for auth
const authRoute = require('../routes/auth')

const connectDB = require('../config/db') //connect MongoDB with server
const Todo = require('../models/Todo')


//load config
dotenv.config({ path: './config/config.env' })

//passport config
require('../config/passport')(passport)

connectDB()

const app = express()

if(process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

const PORT = process.env.PORT || 3030

app.use(bodyParser.json())

//check isLogged in? 

//Session middleware
app.use( //session is saved when login success. expression session doc
  session({
  secret: 'keyboard cat',
  resave: false, //session not saved if nothing modified 
  saveUninitialized: false, //not saved until data is stored
  store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
)

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

//serve everything inside build folder. (static?)
app.use('/build', express.static(path.resolve(__dirname, '../build'))); //serve everything inside build folder

//static for scss? 
// app.use(express.static(path.join(__dirname, '/')))

//root directory sends it to index.html
app.get('/', ensureGuest, (req, res) => {  
  res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
});


//check if logged in
app.get('/dashboard', ensureAuth, async (req,res) => {
  try {
    const todo = await Todo.find({ user: req.user.id }).lean()
    res.render('http://localhost:8080/dashboard', {
      name: req.user.firstName,
      todo
    })
    
  } catch (err) {
    console.error(err)
    res.render('error no todo found')
  }
})

//routes for login auth
app.use('/login', authRoute)

//create LogOut?
app.get('/logout', (req,res) => {
  req.logout()
  res.redirect('/')
})

//set listen ports
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))

module.exports = app;