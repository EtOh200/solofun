const express = require('express')
const router = express.Router()
const passport = require('passport')


//Auth with google
//should route to GET /auth/google (/login)

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//google auth callback
//should route to /auth/google/callback(/login/callback)
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.send('Dash')
  // .redirect('/dashboard') //redirect to dashboard after login success. Else redirect to login page. 
})

module.exports = router