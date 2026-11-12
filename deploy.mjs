import fs from 'fs';
import path from 'path';
import https from 'https';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { ZipArchive } = require('archiver');

const TOKEN = 'nfp_HJQKMTMBqc5na2TdQdULn9HHwv6yNwsW5c94';
const SITE_ID = '8afb0d02-9871-41dd-82e2-8a74e2e5f5e8';
const WORKSPACE = 'C:\\Users\\gt\\.gemini\\antigravity\\scratch\\vansh-studios';
const OUT_DIR = path.join(WORKSPACE, 'out');
const ZIP_PATH = path.join(WORKSPACE, 'site.zip');

console.log('--- VANSH STUDIOS NETLIFY DEPLOYER (ARCHIVER POSIX) ---');

if (!fs.existsSync(OUT_DIR)) {
  console.error('Error: out directory not found. Please run npm run build first.');
  process.exit(1);
}

if (fs.existsSync(ZIP_PATH)) {
  fs.unlinkSync(ZIP_PATH);
}

console.log('Creating clean POSIX zip with forward-slashes...');

const output = fs.createWriteStream(ZIP_PATH);
const archive = new ZipArchive({ zlib: { level: 9 } });

output.on('close', () => {
  const stats = fs.statSync(ZIP_PATH);
  console.log(`Zip created successfully! Size: ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
  uploadToNetlify(stats.size);
});

archive.on('error', (err) => {
  console.error('Archive error:', err);
  process.exit(1);
});

archive.pipe(output);
archive.directory(OUT_DIR, false);
archive.finalize();

function uploadToNetlify(fileSize) {
  console.log('Uploading site.zip to Netlify API...');

  const req = https.request(
    {
      hostname: 'api.netlify.com',
      port: 443,
      path: `/api/v1/sites/${SITE_ID}/deploys`,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/zip',
        'Content-Length': fileSize,
      },
    },
    (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          console.log(`Status Code: ${res.statusCode}`);
          if (res.statusCode === 200 || res.statusCode === 201) {
            console.log('✅ DEPLOY SUCCESSFUL!');
            console.log(`Deploy ID: ${json.id}`);
            console.log(`State: ${json.state}`);
            console.log(`URL: ${json.ssl_url || json.url}`);
          } else {
            console.error('❌ Deploy failed:', json);
          }
        } catch (e) {
          console.error('Failed to parse response:', data);
        }
      });
    }
  );

  req.on('error', (e) => {
    console.error('Upload error:', e);
  });

  const fileStream = fs.createReadStream(ZIP_PATH);
  fileStream.pipe(req);
}
