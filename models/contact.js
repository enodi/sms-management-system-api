'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contact = sequelize.define('Contact', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Name cannot be empty"
        }
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isInt: true,
        notEmpty: {
          args: true,
          msg: "Phone number cannot be empty"
        },
        len: {
          args: [11, 15],
          msg: "Number must be between 11 and 15 characters"
        }
      }
    }
  }, {});
  Contact.associate = function(models) {
    // associations can be defined here
    Contact.hasMany(models.Message, {
      foreignKey: "senderId",
      as: "sentMessages"
    });
    Contact.hasMany(models.Message, {
      foreignKey: "recipientId",
      as: "receivedMessages"
    });
  };
  return Contact;
};
