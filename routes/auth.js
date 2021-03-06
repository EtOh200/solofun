const express = require('express')
const router = express.Router()
const passport = require('passport')


//Auth with google
//should route to GET /auth/google (/login)

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//google auth callback
//should route to /auth/google/callback(/login/callback)
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('http://localhost:8080/dashboard') //redirect to dashboard after login success. Else redirect to login page. 
})

//Logout user
router.get('/logout', (req,res) => {
  req.logout()
  res.redirect('/')
})


module.exports = router