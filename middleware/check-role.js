module.exports = (role) => {
    return (req, res, next) => {
      if (req.userData.role !== role) {
        res.status(401)
        return res.send('Not allowed')
      }
      next()
    }
  }