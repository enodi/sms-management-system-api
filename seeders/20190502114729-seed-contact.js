'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Contacts", [{
      name: "Jane Doe",
      phoneNumber: "07033398615",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: "John Doe",
      phoneNumber: "08033498616",
      createdAt: new Date(),
      updatedAt: new Date()
    },
      {
        name: "Andrew John",
        phoneNumber: "08133498616",
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {}) ;
    const contacts = await queryInterface.sequelize.query(
      `SELECT id FROM CONTACTS;`
    );

    const contactRows = contacts[0];

    return await queryInterface.bulkInsert("Messages", [
      {
        message: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        status: "delivered",
        senderId: contactRows[0].id,
        recipientId: contactRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        message: "Aliquam tincidunt mauris eu risus.",
        status: "delivered",
        senderId: contactRows[1].id,
        recipientId: contactRows[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        message: "Vestibulum auctor dapibus neque.",
        status: "delivered",
        senderId: contactRows[0].id,
        recipientId: contactRows[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Messages', null, {});
    await queryInterface.bulkDelete('Contacts', null, {});
  }
};
