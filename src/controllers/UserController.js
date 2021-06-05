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

      const passwordCheck = await bcrypt.compareSync(password, user.password )
  
      if(!passwordCheck) {
        return res.status(401).json({ error: 'Invalid password' })
      }

      user.password = undefined

      res.status(200).json({user, token: generateToken({ id: user.id })})


    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' })
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

      } else {
        const users = await User.findByPk(user_id)
        
        users.password = undefined

        return res.status(200).json(users)
      }

    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' })
    }
  },

  async update(req, res){

    try {
      
      const { user_id } = req.params

      const user = await User.findByPk(user_id)

      console.log(user)

      if(!user) {
        return res.status(404).json({ error: "User not found" })
      }

      const { name, cpf, email, password } = req.body

      if (!name, !cpf, !email, !password) {
        return res.status(400).json({ error: "Missing body param" })
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

    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' })
    }

  },

  async delete(req, res){
    try {
      const { user_id } = req.params

      const user = await User.findByPk(user_id)
  
      if(!user){
        return res.status(404).json({ error: "User not found" })
      }
  
      const { password } = req.body
  
      if(!password){
        return res.status(400).json({ error: 'Missing password on request body' })
      }
  
      const passwordDB = await User.findAll({
        attributes: ['password'],
        where: { 
          id: user_id 
        }
      })
  
      const passwordCheck = await bcrypt.compareSync(password, Object.values(passwordDB[0])[0].password )
  
      if(!passwordCheck) {
        return res.status(401).json({ error: 'Invalid password' })
      }
      
      await User.destroy({
        where: {
          id: user_id
        }
      })
  
      return res.status(410).json({ message: 'User deleted with successfully' })

    } catch (error) {
      return res.status(500).json({ message: 'Internal server error'})
    }

  }
}