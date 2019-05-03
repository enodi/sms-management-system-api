import db from "../models";

export const createMessage = (req, res) => {
  const { senderId, recipientId, message } = req.body;

  db.Contact.findByPk(senderId)
    .then((senderIdExist) => {
      if (!senderIdExist) {
        return res.status(404).json({
          message: `Contact with id: ${senderId} does not exist`
        });
      }
      db.Contact.findByPk(recipientId)
        .then((recipientIdExist) => {
          if (!recipientIdExist) {
            return res.status(404).json({
              message: `Contact with id: ${recipientId} does not exist`
            });
          }
          return db.Message.create({ message, senderId, recipientId, status:"delivered" })
            .then(messageCreated => {
              res.status(201).json({
                message: "Message sent successfully",
                senderId,
                recipientId,
                data: messageCreated
              });
            })
            .catch(error => res.status(500).json(error));
        });
    });
}

export const getMessages= (req, res) => {
  db.Message.findAll()
    .then(messages => {
      if (messages.length === 0) {
        return res.status(404).json({
          message: "No message exist at the moment!",
          data: messages
        });
      }
      return res.status(200).json({
        message: "All messages retrieved successfully",
        data: messages
      });
    })
    .catch(error => res.status(500).json(error));
}

export const getSpecificMessage = (req, res) => {
  const id = parseInt(req.params.messageId);
  db.Message.findByPk(id)
    .then(message => {
      if (!message) {
        return res.status(404).json({
          message: `Message with id: ${id} does not exist`
        });
      }
      return res.status(200).json({
        message: "Meesage retrieved successfully",
        data: message
      });
    })
    .catch(error => res.status(500).json(error));
}

export const deleteMessage = (req, res) => {
  const id = parseInt(req.params.messageId);

  db.Message.findByPk(id)
    .then(message => {
      if (message === null) {
        return res.status(404).json({
          message: `Message with id: ${id} does not exist`
        });
      }
      message.destroy();
      return res.status(200).json({
        message: `Message with id: ${id} was deleted successfully`
      });
    })
    .catch(error => res.status(500).json(error));
}
