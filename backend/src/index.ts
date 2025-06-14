import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import projectRoutes from './routes/project';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors({
  origin: 'http://localhost:3001', // or '*'
}));
app.use(express.json());
app.use('/api/v1/projects', projectRoutes);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'Backend running!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
