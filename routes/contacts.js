import express from "express";
import {
  createContact,
  getContacts,
  updateContact,
  deleteContact,
  getSpecificContact
} from "../controllers/contacts";
import { validate } from "../middleware/validation";

const app = express.Router();

app.route("/").post(validate, createContact);
app.route("/").get(getContacts);
app.route("/:contactId").get(getSpecificContact);
app.route("/:contactId").put(validate, updateContact);
app.route("/:contactId").delete(deleteContact);

export default app;
