import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true }, // e.g., "Cats,Dogs"
  subCategory: { type: [String] }, // Optional, like ["Fractures", "Joint Pain"]
  conditions: { type: [String], required: true },
  sizes: { type: [String] }, // Optional, like ["70 Tabs"]
  bestseller: { type: Boolean, default: false },
  additional: [
    {
      label: { type: String },
      value: { type: String },
    },
  ],
  details: [
    {
      title: { type: String },
      content: { type: [String] }, // Accepts array of text blocks
    },
  ],
  date: { type: Number, required: true },
});

const productModel =
  mongoose.models.product || mongoose.model('Product', productSchema);

export default productModel;
