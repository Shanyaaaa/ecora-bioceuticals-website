import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

// ✅ Serve images statically
app.use('/uploads', express.static('uploads'));

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

app.get('/', (req, res) => {
  res.send("API working");
});

app.listen(port, () => console.log("Server started on PORT: " + port));
