const fs = require('fs');
const path = require('path');
const https = require('https');
const sharp = require('sharp');

const url = 'https://naxenindia.com/whatsapp.jpeg';
const outDir = path.join(__dirname, '..', 'public', 'case-studies');
const outJpeg = path.join(outDir, 'naxen-preview.jpg');
const outWebp = path.join(outDir, 'naxen-preview.webp');

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error('Failed to download image: ' + res.statusCode));
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function convert() {
  await ensureDir(outDir);
  console.log('Downloading preview image...');
  await download(url, outJpeg);
  console.log('Converting to WebP...');
  await sharp(outJpeg)
    .resize({ width: 1600 })
    .webp({ quality: 82 })
    .toFile(outWebp);
  console.log('Saved:', outWebp);
}

convert().catch((err) => {
  console.error(err);
  process.exit(1);
});
