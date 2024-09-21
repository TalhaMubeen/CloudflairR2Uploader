import { parentPort, workerData } from 'worker_threads';
import { uploadToR2 } from '../services/r2.service.js';

const { filePath, fileName } = workerData;

const uploadFile = async () => {
  try {
    await uploadToR2(filePath, fileName);
    parentPort.postMessage({ success: true, fileName });
  } catch (error) {
    parentPort.postMessage({ success: false, fileName, error });
  }
};

uploadFile();
