import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import watchRoutes from './routes/watchRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: "https://mern-online-watch-shop-frontend.onrender.com",
    credentials: true,
  })
);

app.use(express.json());

// Root Route
app.get('/', (req, res) => {
  res.send('Online Watch Shop API is running...');
});

// API Routes
app.use('/api/watches', watchRoutes);

// Database Connection
connectDB();

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: 'Server error!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
