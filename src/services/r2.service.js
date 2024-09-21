import AWS from 'aws-sdk';
import { config } from '../config/config.js';
import fs from 'fs';

const { accessKeyId, secretAccessKey, bucketName, endpoint } = config.r2;

const s3 = new AWS.S3({
  accessKeyId,
  secretAccessKey,
  endpoint,
  s3ForcePathStyle: true, // Required for R2
  signatureVersion: 'v4',
});

export const uploadToR2 = async (filePath, fileName) => {
  try {
    const fileContent = await fs.promises.readFile(filePath);
    const params = {
      Bucket: bucketName,
      Key: fileName,
      Body: fileContent,
    };

    await s3.upload(params).promise();
    console.log(`Uploaded ${fileName} successfully.`);
  } catch (error) {
    console.error(`Error uploading ${fileName}:`, error);
    throw error;
  }
};
