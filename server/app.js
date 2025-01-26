import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import storyRoutes from './routes/stories.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(bodyParser.json({ limit: "32mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }));
app.use(cors({ origin: 'http://localhost:3000' }));

app.use("/stories", storyRoutes);

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5001;

// Updated connectDB function
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
  } catch (err) {
    console.error("Connection to MongoDB failed", err.message);
  }
};

console.log(process.env.MONGO_URI);

connectDB();

mongoose.connection.on("open", () => console.log("Connection to database has been established successfully"));
mongoose.connection.on("error", (err) => console.log(err));