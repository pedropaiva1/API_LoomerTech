const { Model, DataTypes } = require('sequelize')

class Immobile extends Model{

  static init(sequelize) {
    super.init({
      zipcode: DataTypes.STRING,
      number: DataTypes.INTEGER,
      complement: DataTypes.STRING,
      rent_amount: DataTypes.INTEGER,
      number_of_rooms: DataTypes.INTEGER,
      available: DataTypes.BOOLEAN
    }, {
      sequelize
    })
  }

  static associate(models){
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }

}

module.exports = Immobile