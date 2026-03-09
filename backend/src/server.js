import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import watchRoutes from './routes/watchRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
const allowedOrigins = [
  'http://localhost:5173', // Vite default local port
  process.env.FRONTEND_URL // Will be added in Render environment
];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));
app.use(express.json());

// Main Root Route
app.get('/', (req, res) => {
    res.send('Online Watch Shop API is running...');
});

// Routes
app.use('/api/watches', watchRoutes);

// Database Connection
connectDB();

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Server error!' });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
