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
  // timestamps: false
})

Burger.associate = function(models) {
  // We're saying that a Post should belong to an Author
  // A Post can't be created without an Author due to the foreign key constraint
  Burger.belongsTo(models.User, {
    foreignKey: {
      allowNull: false
    }
  });
};

return Burger;
  };

//   module.exports = function(sequelize, DataTypes) {
//   var Post = sequelize.define("Post", {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1]
//       }
//     },
//     body: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//       len: [1]
//     }
//   });

//   Post.associate = function(models) {
//     // We're saying that a Post should belong to an Author
//     // A Post can't be created without an Author due to the foreign key constraint
//     Post.belongsTo(models.Author, {
//       foreignKey: {
//         allowNull: false
//       }
//     });
//   };

//   return Post;
// };



