const { Model, DataTypes } = require('sequelize')

class Immobile extends Model{

  static init(sequelize) {
    super.init({
      zipcode: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate:{
          notEmpty: {
            msg: "Esse campo não pode ser vazio"
          },
          len: {
            args: [5, 5],
            msg: "Esse campo deve ter 5 caracteres"
          }
        }
      },
      number: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio"
          },
        }
      },
      complement: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio"
          },
        }
      },
      rent_amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio"
          },
          isFloat: true
        }
      },
      number_of_rooms: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio"
          }
        }
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio"
          },
        }
      }
    }, {
      sequelize
    })
  }

  static associate(models){
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' })
  }

}

module.exports = Immobile