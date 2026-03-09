import mongoose from 'mongoose';

const watchSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  brand: {
    type: String,
    required: [true, 'Brand is required'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be positive']
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  category: {
    type: String,
    required: [true, 'Category is required']
  },
  image: {
    type: String,
    required: [true, 'Image URL is required']
  },
  type: {
    type: String,
    required: [true, 'Type is required'],
    enum: {
      values: ['men', 'women', 'kids'],
      message: '{VALUE} is not a valid type'
    }
  }
}, { timestamps: true });

export default mongoose.model('Watch', watchSchema);
