'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('user', {
    firstname: {
      type: DataTypes.STRING,
      required: true,
      
    },
    lastname: {
      type: DataTypes.STRING,
      required: true,
     
    },
    email: {
      type: DataTypes.STRING,
      required: true,
     
    }
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};

