
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import itemRoutes from './routes/items.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://msinfotech027_db_user:maazsaad123@cluster0.4fdsmme.mongodb.net/urban_demo?appName=Cluster0')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get("/", (req, res) => {
  res.send("API WORKING");
});

app.listen(PORT, () => console.log('Server running on port', PORT));
