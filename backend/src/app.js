// src/app.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import xss from 'xss-clean';
import mongoSanitize from 'express-mongo-sanitize';
import rateLimit from 'express-rate-limit';
import { errorHandler } from './middleware/errorHandler.js';

// Routes
import authRoutes from './routes/authRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import userRoutes from './routes/userRoutes.js';
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(helmet({
  contentSecurityPolicy: {
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https:", "data:"], // Changed from "*" to "https:" for better security
    },
  }
}));

// ✅ Middleware stack
app.use(express.json());
app.use(cors());
// app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
app.use(morgan('dev'));

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 mins
  max: 100, // limit each IP
});
app.use(limiter);

// ✅ Routes
app.use('/api/auth', authRoutes);
app.use('/api/books', bookRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/users', userRoutes);
app.use(express.static(path.join(process.cwd(), "dist")));

// Catch-all AFTER static middleware
app.get("*", (req, res) => {
  res.sendFile(path.join(process.cwd(), "dist", "index.html"));
});
// ✅ Error handling middleware
app.use(errorHandler);

export default app;
