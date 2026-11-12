import fs from 'fs';
import path from 'path';
import git from 'isomorphic-git';

const dir = 'C:\\Users\\gt\\.gemini\\antigravity\\scratch\\vansh-studios';

async function initAndCommit() {
  console.log('Initializing Git repo...');
  await git.init({ fs, dir, defaultBranch: 'main' });
  console.log('Git repo initialized!');

  // Read all files ignoring node_modules, .next, site.zip, .git
  const ignoreList = ['node_modules', '.next', 'site.zip', '.git', 'out'];

  function getFiles(currentDir, baseDir = '') {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });
    let files = [];
    for (const entry of entries) {
      if (ignoreList.includes(entry.name)) continue;
      const fullPath = path.join(currentDir, entry.name);
      const relPath = path.join(baseDir, entry.name).replace(/\\/g, '/');
      if (entry.isDirectory()) {
        files = files.concat(getFiles(fullPath, relPath));
      } else {
        files.push(relPath);
      }
    }
    return files;
  }

  const filesToAdd = getFiles(dir);
  console.log(`Adding ${filesToAdd.length} files...`);

  for (const file of filesToAdd) {
    await git.add({ fs, dir, filepath: file });
  }

  console.log('Committing files...');
  const sha = await git.commit({
    fs,
    dir,
    message: 'Initial commit: VANSH STUDIOS luxury 3D & 2D flagship website',
    author: {
      name: 'shardagadeshwar-glitch',
      email: 'shardagadeshwar@gmail.com',
    },
  });

  console.log('✅ Commit created! SHA:', sha);
}

initAndCommit().catch(console.error);
