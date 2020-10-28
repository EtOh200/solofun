const express = require('express')
const router = express.Router()
const passport = require('passport')


//Auth with google
//should route to GET /auth/google (/login)

router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

//google auth callback
//should route to /auth/google/callback(/login/callback)
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/dashboard').send(console.log('GOT DASH')) //redirect to dashboard after login success. Else redirect to login page. 
})

module.exports = router