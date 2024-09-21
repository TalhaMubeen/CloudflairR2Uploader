import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'coin_images');

export const getFiles = () => {
  return fs.promises.readdir(imagesDir).then(files =>
    files.map(file => ({
      path: path.join(imagesDir, file),
      name: file,
    })),
  );
};
