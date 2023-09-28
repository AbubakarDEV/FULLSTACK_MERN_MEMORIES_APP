import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/user.js";

// const url = "mongodb://0.0.0.0:27017/memories?directConnection=true";

const url =
  "mongodb+srv://abubakarjilani99:oJDOSmHV0qdKHgwK@cluster0.nki8w7y.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url);

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);
app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server Running on Port: http://localhost:${PORT}`)
);
