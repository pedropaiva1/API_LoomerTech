const User = require('../models/User')
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')

const authConfig = require('../config/auth.json')

function generateToken(params = {}){
  return jwt.sign(params, authConfig.secret, {
    expiresIn: 86400
  })

}

module.exports = { 
  async create(req, res) {

    try {
      const { name, cpf, email, password } = req.body

      const user = await User.create({ name, cpf, email, password: await bcrypt.hash(password, 8) })

      user.password = undefined
  
      return res.status(201).json({ user, token: generateToken({ id: user.id }) })

    } catch (err) {
      return res.status(500).json({ message: 'Internal server error' , error: err})
    }
  },

  async auth(req, res){

    try {
      const { email, password } = req.body

      const user = await User.findOne({ where: { email } });

      if(!user){
        return res.status(400).json({ message: "User not found for this email" })
      }
      
      const passwordCheck = await bcrypt.compareSync(password, user.password )
  
      if(!passwordCheck) {
        return res.status(401).json({ error: 'Invalid password' })
      }

      user.password = undefined

      res.status(200).json({user, token: generateToken({ id: user.id })})


    } catch (err) {
      return res.status(500).json({ message: 'Internal server error', error: err})
    }

  },

  async index(req, res){

    try {

      const { user_id } = req.params

      if(!user_id){
        const users = await User.findAll()

        users.forEach((value, index)=>{
          users[index].password = undefined
        })


        return res.status(200).json(users)

      }

      const users = await User.findByPk(user_id)
        
      users.password = undefined

      return res.status(200).json(users)
      

    } catch (err) {
      return res.status(500).json({ message: 'Internal server error', error: err})
    }
  },

  async update(req, res){

    try {
      
      const { user_id } = req.params
      const { name, cpf, email, password } = req.body

      const user = await User.findByPk(user_id)

      if(!user) {
        return res.status(404).json({ error: "User not found" })
      }


      await User.update(
        { 
          name, cpf, email, password: await bcrypt.hash(password, 8) 
        }, {
          where: {
            id: user_id
          }
        }
      )

      return res.status(200).json({ message: 'User information updated successfully' })

    } catch (err) {
      return res.status(500).json({ message: 'Internal server error', error: err})
    }

  },

  async delete(req, res){
    try {
      const { user_id } = req.params
      const { password } = req.body

      const user = await User.findByPk(user_id)

      if(!user_id || !password){
        return res.status(400).json({ error: 'Missing body param' })
      }
  
      if(!user){
        return res.status(404).json({ error: "User not found" })
      }
  
      const passwordCheck = await bcrypt.compareSync(password, user.password )
  
      if(!passwordCheck) {
        return res.status(401).json({ error: 'Invalid password' })
      }
      
      await User.destroy({
        where: {
          id: user_id
        }
      })
  
      return res.status(410).json({ message: 'User deleted with successfully' })

    } catch (err) {
      return res.status(500).json({ message: 'Internal server error', error: err})
    }

  }
}