import db from "../models";

export const createContact = (req, res) => {
  const { name, phoneNumber } = req.body;
  
  db.Contact.findOne({
    where: { phoneNumber }
  }).then((numberExists) => {
    if(numberExists) {
      return res.status(422).json({ message: "Phone number already exists"});
    }
    db.Contact.create({ name, phoneNumber })
      .then(contact => {
        return res.status(201).json({
          message: "Contact created successfully",
          data: contact
        });
      })
      .catch(error => res.status(500).json(error));
  }) ;
}

export const getContacts = (req, res) => {
  db.Contact.findAll()
    .then(contacts => {
      if(contacts.length === 0) {
        return res.status(404).json({
          message: "No contact exist at the moment. Create a contact to continue",
          data: contacts
        });
      }
      return res.status(200).json({
        message: "All contacts retrieved successfully",
        data: contacts
      });
    })
    .catch(error => res.status(500).json(error));
}

export const getSpecificContact = (req, res) => {
  const id = parseInt(req.params.contactId);
  db.Contact.findByPk(id)
    .then(contact => {
      if (!contact) {
        return res.status(404).json({
          message: `Contact with id: ${id} does not exist`
        });
      }
    
    db.Contact.findAll({
      where: { id },
      include: [
        { model: db.Message, as: "sentMessages" },
        { model: db.Message, as: "receivedMessages" }
      ]
    }).then((messageRetrieved) => {
      return res.status(200).json({
        data: messageRetrieved
      });
    }).catch(error => res.status(500).json(error));
  });
}

export const updateContact = (req, res) => {
  const id = parseInt(req.params.contactId);
  const { name, phoneNumber } = req.body;

  db.Contact.findByPk(id)
    .then(contact => {
      if (!contact) {
        return res.status(404).json({
          message: `Contact with id: ${id} does not exist`
        });
      }
      contact.update({ name, phoneNumber })
        .then(() => {
          return res.status(200).json({
            message: "Contact updated successfully",
            data: contact
          });
        })
        .catch(error => res.status(500).json(error));
    });
}

export const deleteContact = (req, res) => {
  const id = parseInt(req.params.contactId);

  db.Contact.findByPk(id)
    .then(contact => {
      if (contact === null) {
        return res.status(404).json({
          message: `Contact with id: ${id} does not exist`
        });
      }
      contact.destroy();
      return res.status(200).json({
        message: `Contact with id: ${id} was deleted successfully`
      });
    })
    .catch(error => res.status(500).json(error));
}
