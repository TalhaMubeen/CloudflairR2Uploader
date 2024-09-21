import dotenv from 'dotenv';

dotenv.config();

export const config = {
  r2: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
    bucketName: process.env.R2_BUCKET_NAME,
    region: process.env.R2_REGION,
    endpoint: process.env.R2_ENDPOINT,
  },
};

