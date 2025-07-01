import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error('MongoDB URL is not defined');
    }

    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (e) {
    console.error('MongoDB connection error:', e);
  }
};

export default connectDB;