import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import streamRoutes from "./routes/streams.route.js";
import studentRoutes from "./routes/students.route.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/streams", streamRoutes);
app.use("/students", studentRoutes);

// app.use("/", (req, res) => {
//   res.send("Hello from kilimo-high API art by dickenzoh");
// });

const PORT = process.env.PORT || 3008;

mongoose
  .connect(process.env.MONGODB_CONN_URL_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));
