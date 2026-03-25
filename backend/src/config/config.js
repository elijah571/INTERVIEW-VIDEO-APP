import dotenv from 'dotenv';

dotenv.config();

export const envConfig = {
  port: process.env.PORT,
  db: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV,
};
