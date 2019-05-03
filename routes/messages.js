import express from "express";
import {
  createMessage,
  getMessages,
  deleteMessage,
  getSpecificMessage
} from "../controllers/messages";

const app = express.Router();

app.route("/").post(createMessage);
app.route("/").get(getMessages);
app.route("/:messageId").get(getSpecificMessage);
app.route("/:messageId").delete(deleteMessage);

export default app;
