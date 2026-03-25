import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { envConfig } from './config/config.js';

//  Proper __dirname fix for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// API route
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'checking the health',
  });
});

//  Serve frontend in production
if (envConfig.NODE_ENV === 'production') {
  const frontendPath = path.join(__dirname, '../../frontend/dist');

  app.use(express.static(frontendPath));

  //  FIXED wildcard route
  app.use((req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
  });
}
app.listen(envConfig.port, () => {
  console.log(`Server running on port: ${envConfig.port}`);
});
