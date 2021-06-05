const Immobile = require('../models/Immobile')
const User = require('../models/User')

module.exports = { 
  async create(req, res) {

    try {
      const { user_id } = req.params

      if(!user_id){
        return res.status(400).json({ message: "Missing body param" })
      }

      const { 
        zipcode,
        number,
        complement,
        rent_amount,
        number_of_rooms, 
        available 
      } = req.body

      const user = await User.findByPk(user_id)
      
      if(!user) {
        return res.status(400).json( { error: "User not found" } )
      }

      const immobile = await Immobile.create({
        user_id,
        zipcode,
        number,
        complement,
        rent_amount,
        number_of_rooms, 
        available 
      })

      return res.status(200).json(immobile)

    } catch (err) {
      return res.status(500).json({ message: 'Internal server error', error: err })
    }

  },

  async index(req, res) {

    try {
      const { user_id } = req.params
      const { immobile_id } = req.params

      if(!user_id){
        return res.status(400).json({ message: "Missing router param" })
      }

      const user = await User.findByPk(user_id)

      if(!user){
        return res.status(404).json({ message: "User not found" })
      }

      if(!immobile_id){
        const immobiles = await Immobile.findAll({ where: {
          user_id
        }})

        user.password = undefined

        return res.status(200).json({ user_id:user.id, name: user.name, email: user.email, immobiles })
      }

      const immobiles = await Immobile.findAll({ where: {
        user_id,
        id: immobile_id
      } })

      return res.status(200).json({  name: user.name, email: user.email, immobiles })

    } catch (err) {
      return res.status(500).json({ message: "Internal server error", error: err })
    }

  },

  async update(req, res) {

    try {
      const { user_id } = req.params
      const { immobile_id } = req.params

      const user = await User.findByPk(user_id)
      if(!user_id || !immobile_id){
        return res.status(400).json({ message: "Missing body param" })
      }

      if(!user) {
        return res.status(404).json({ error: "User not found" })
      }

      const immobileExists = Immobile.findByPk(immobile_id)

      if(!immobileExists){
        return res.status(400).json({ message: "Immobile not exist" })
      }

      const { 
        zipcode,
        number,
        complement,
        rent_amount,
        number_of_rooms, 
        available 
      } = req.body

      await Immobile.update(
        { 
          zipcode,
          number,
          complement,
          rent_amount,
          number_of_rooms, 
          available 
        }, {
          where: {
            id: immobile_id,
            user_id
          }
        }
      )

      return res.status(200).json({ message: 'Immobile information updated successfully' })

    } catch (err) {
      return res.status(500).json({ message: "Internal server error", error: err })
    }

    
  },

  async delete(req, res) {

    try {
      
      const { user_id } = req.params
      const { immobile_id } = req.params

      if(!user_id || !immobile_id){
        return res.status(400).json({ message: "Missing router param" })
      }

      const user = await User.findByPk(user_id)

      if(!user){
        return res.status(404).json({ message: "User not found" })
      }

      const immobileExists = Immobile.findByPk(immobile_id)

      if(!immobileExists){
        return res.status(400).json({ message: "Immobile not exist" })
      }
      
      await Immobile.destroy({
        where: {
          id: immobile_id,
          user_id
        }
      })

      return res.status(200).json({ message: "Immobile deleted with successfully" })

    } catch (err) {
      return res.status(500).json({ message: "Internal server error" })
    }

    return res.status(200)
  }

}