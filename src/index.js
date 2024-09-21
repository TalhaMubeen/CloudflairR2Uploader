import { getFiles } from './services/file.service.js';
import { uploadFilesInParallel } from './workers/workerManager.js';

(async () => {
  try {
    const files = await getFiles();
    if (files.length === 0) {
      console.log('No files to upload.');
      return;
    }

    uploadFilesInParallel(files);
  } catch (error) {
    console.error('Error initiating upload:', error);
  }
})();
