// src/app.ts
import express from 'express';
import connectDB from './config';
import taskRoutes from './routes/taskRoutes';
import projectRoutes from './routes/projectRoutes';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
