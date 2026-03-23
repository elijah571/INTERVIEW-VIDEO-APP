import express from 'express';
import { envConfig } from './config/config.js';

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'checking the health',
  });
});

app.listen(envConfig.port, () => {
  console.log('server running on port :', envConfig.port);
});
