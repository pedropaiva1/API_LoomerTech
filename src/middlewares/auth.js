const jwt = require('jsonwebtoken')

const dotenv = require('dotenv')
dotenv.config()

const secret = process.env.SECRET

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  if(!authHeader){
    return res.status(401).json({ message: "No token provided" })
  }
    
  const parts = authHeader.split(' ')

  if(!parts.length === 2){
    return res.status(401).json({ error: 'Token error' })
  }

  const [ scheme, token ] = parts

  if(!/^Bearer$/i.test(scheme)){
    return res.status(401).json({ error: 'Token malformatted' })
  }

  jwt.verify(token, secret, (err, decoded) => {
    
    if (err) {
      return res.status(401).json({ error: 'Token invalid' })
    }

    req.userId = decoded.id

    return next()

  })
}