const Immobile = require('../models/Immobile')
const User = require('../models/User')

module.exports = { 
  async create(req, res) {
    const { user_id } = req.params

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

    return res.json(immobile)

  },

  async index(req, res){

    const { user_id } = req.params

    const user = await User.findByPk(user_id, {
      include: { association: 'immobiles' }
    })

    console.log(user)

    return res.json(user)
  }

}