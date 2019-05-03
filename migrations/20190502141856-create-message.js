'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      message: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      senderId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Contacts",
          key: "id",
          as: "senderId"
        }
      },
      recipientId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Contacts",
          key: "id",
          as: "recipientId"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Messages');
  }
};
