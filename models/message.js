'use strict';
module.exports = (sequelize, DataTypes) => {
  const Message = sequelize.define('Message', {
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: "Message cannot be empty"
        }
      }
    },
    status: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["draft", "delivered"],
      defaultValue: "draft"
    }
  }, {});
  Message.associate = function(models) {
    // associations can be defined here
    Message.belongsTo(models.Contact, {
      foreignKey: "senderId",
      onDelete: "CASCADE"
    });
    Message.belongsTo(models.Contact, {
      foreignKey: "recipientId",
      onDelete: "CASCADE"
    })
  };
  return Message;
};
