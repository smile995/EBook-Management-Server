import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { initialRoute } from './api';
import { globalErrorHandler } from './app/errors/globalError';
import { notFoundRoute } from './app/utills/notFound';

const app: Application = express();

// Middleware
app.use(cors({
  origin: ["http://localhost:3000"],
  credentials: true,
}));
app.use(express.json()); // Parse JSON body

// Root route
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: "BookshopServer is running" });
});

// API routes
initialRoute(app);

// 404 route (not found route)
app.use(notFoundRoute);

// Global error handler
app.use(globalErrorHandler);

export default app;
