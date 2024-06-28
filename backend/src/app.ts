import express from 'express';
import connectDB from './config';
import taskRoutes from './routes/taskRoutes';
import projectRoutes from './routes/projectRoutes';
import userRoutes from './routes/userRoutes';
import chatRoutes from './routes/chatRoutes';
import documentRoutes from './routes/documentRoutes';
import videoRoutes from './routes/videoRoutes';
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
app.use('/api/chat', chatRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/videos', videoRoutes);

app.get('/api', (req, res) => {
  res.send('API is running...');
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
