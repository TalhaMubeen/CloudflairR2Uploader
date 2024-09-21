import { Worker } from 'worker_threads';

const MAX_WORKERS = 12; // Adjust based on your system capabilities

export const uploadFilesInParallel = files => {
  const workers = [];
  let activeWorkers = 0;

  const startWorker = file => {
    if (activeWorkers >= MAX_WORKERS) return;

    activeWorkers++;
    const worker = new Worker('./src/workers/uploadWorker.js', {
      workerData: { filePath: file.path, fileName: file.name },
    });

    worker.on('message', result => {
      activeWorkers--;
      console.log(`File: ${result.fileName} uploaded successfully.`);
      processNextFile();
    });

    worker.on('error', error => {
      activeWorkers--;
      console.error(`Worker error:`, error);
      processNextFile();
    });

    workers.push(worker);
  };

  const processNextFile = () => {
    const nextFile = files.shift();
    if (nextFile) {
      startWorker(nextFile);
    } else if (activeWorkers === 0) {
      console.log('All uploads completed.');
    }
  };

  // Start initial workers
  for (let i = 0; i < MAX_WORKERS && i < files.length; i++) {
    processNextFile();
  }
};
