module.exports = {
  ensureAuth: function (req, res, next) {
    if(req.isAuthenticated()) {
      return next()
    } else {
      res.redirect('/')
    }
  },
  ensureGuest: function (req, res, next) {
    if(req.isAuthenticated()) {
      res.redirect('http://localhost:8080/dashboard')
    } else {
      return next()
    }
  }
}