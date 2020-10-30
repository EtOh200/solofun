const express = require('express')
const router = express.Router()
const { ensureAuth, ensureGuest } = require('./logged')

//check if logged in
router.get('/', ensureAuth, async (req,res) => {
  //if auth is currently in session, move on to display dashboard.
  try {
    const todo = await Todo.find({ user: req.user.id }).lean()
    //send request back to frontend Dashboard component? 
    res.render('/dashboard', {
      name: req.user.firstName,
      todo
    })
    
  } catch (err) {
    console.error(err)
    res.render('error no todo found')
  }
})


module.exports = router