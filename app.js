import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import contactRouter from "./routes/contacts";
import messageRouter from "./routes/messages";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1/contacts", contactRouter);
app.use("/api/v1/messages", messageRouter);

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome to SMS Management System API'
  });
});

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

//Error Handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: { message: err.message }
  });
});

app.listen(process.env.PORT, () => {
  console.log(`App runnning on port ${process.env.PORT}`);
});
