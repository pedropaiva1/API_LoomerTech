const { Model, DataTypes } = require('sequelize')

class User extends Model{

  static init(sequelize) {
    super.init({
      name: { 
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio"
          },
          len: {
            args: [4, 20],
            msg: "Esse campo deve ter entre 4 e 20 caracteres"
          }
        }
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser nulo"
          },
          len: {
            args: [11],
            msg: "Esse campo deve ter 11 caracteres"
          }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: "Esse campo precisa ser um email"
          }
        }
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {

        }
      }
    }, {
      sequelize
    })
  }

  static associate(models){
    this.hasMany(models.Immobile, { foreignKey: 'user_id', as: 'immobiles' })
  }

}

module.exports = User