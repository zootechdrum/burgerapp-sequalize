module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    // Giving the User model a name of type STRING
    name: DataTypes.STRING,

  });

  User.associate = function (models) {
    // Associating Author with Posts
    // When an Burger is deleted, also delete any associated Posts
    User.hasMany(models.Burger, {
       as: "burgers", 
       onDelete: 'SET NULL', 
       hooks: true,
       OnUpdate: 'CASCADE'
      })
  }
  return User;
};


// User.hasMany(models.Burger, { as: "burgers", onDelete: "cascade" })


    // module.exports = function(sequelize, DataTypes) {
    //   var Author = sequelize.define("Author", {
    //     // Giving the Author model a name of type STRING
    //     name: DataTypes.STRING
    //   });

    //   Author.associate = function(models) {
    //     // Associating Author with Posts
    //     // When an Author is deleted, also delete any associated Posts
    //     Author.hasMany(models.Post, {
    //       onDelete: "cascade"
    //     });
    //   };

    //   return Author;
    // };
