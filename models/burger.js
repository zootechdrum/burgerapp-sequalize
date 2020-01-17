module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("burgers", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      flag: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true }
    }
  },
{
  timestamps: false
})

// Post.associate = function(models) {
//   // We're saying that a Post should belong to an Author
//   // A Post can't be created without an Author due to the foreign key constraint
//   Post.belongsTo(models.User, {
//     foreignKey: {
//       allowNull: false
//     }
//   });
// };

return Burger;
  };
