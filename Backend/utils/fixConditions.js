import mongoose from 'mongoose';
import dotenv from 'dotenv';
import productModel from '../models/productModel.js';

dotenv.config();

const fixProductConditions = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected.');

    const products = await productModel.find();

    let updatedCount = 0;

    for (const product of products) {
      const original = product.conditions;
      let cleaned = [];

      if (typeof original === 'string') {
        cleaned = original.split(',').map(c => c.trim()).filter(Boolean);
      } else if (Array.isArray(original)) {
        cleaned = original.map(c => c.trim()).filter(Boolean);
      }

      if (JSON.stringify(original) !== JSON.stringify(cleaned)) {
        product.conditions = cleaned;
        await product.save();
        updatedCount++;
      }
    }

    console.log(`✔️ Updated ${updatedCount} product(s) with clean conditions.`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Failed to fix product conditions:', error);
    process.exit(1);
  }
};

fixProductConditions();
