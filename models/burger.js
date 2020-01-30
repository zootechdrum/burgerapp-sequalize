module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
       type: DataTypes.BOOLEAN,
       defaultValue:"0",
       allowNull: false 
    },
  },
{
})

Burger.associate = function(models) {

  // A Burger can't be created without an Author due to the foreign key constraint
  Burger.belongsTo(models.User, {
  });
};

return Burger;
  };




