import express from 'express';
import connectDB from './config';
import taskRoutes from './routes/taskRoutes';
import projectRoutes from './routes/projectRoutes';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Configurazione CORS
app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/api/tasks', taskRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/users', userRoutes);

app.get('/api', (req, res) => {
  res.send('API is running...');
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
