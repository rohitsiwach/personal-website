const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting deployment...');

// Build the project
console.log('📦 Building project...');
execSync('npm run build', { stdio: 'inherit' });

// Create gh-pages branch
console.log('🌿 Creating gh-pages branch...');
try {
  execSync('git checkout --orphan gh-pages', { stdio: 'inherit' });
} catch (error) {
  // If branch exists, switch to it
  execSync('git checkout gh-pages', { stdio: 'inherit' });
}

// Remove all files
console.log('🧹 Cleaning branch...');
execSync('git rm -rf .', { stdio: 'inherit' });

// Copy only build files (not node_modules)
console.log('📋 Copying build files...');
const buildPath = path.join(__dirname, 'build');
const files = fs.readdirSync(buildPath);

files.forEach(file => {
  const sourcePath = path.join(buildPath, file);
  const destPath = path.join(__dirname, file);
  
  if (fs.statSync(sourcePath).isDirectory()) {
    execSync(`xcopy "${sourcePath}" "${destPath}" /E /I /Y`, { stdio: 'inherit' });
  } else {
    fs.copyFileSync(sourcePath, destPath);
  }
});

// Remove node_modules if it exists
console.log('🗑️ Removing node_modules...');
try {
  execSync('Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue', { stdio: 'inherit' });
} catch (error) {
  // Ignore errors
}

// Add only the necessary files
console.log('💾 Adding files to git...');
execSync('git add asset-manifest.json', { stdio: 'inherit' });
execSync('git add index.html', { stdio: 'inherit' });
execSync('git add static/', { stdio: 'inherit' });
execSync('git add gallery/', { stdio: 'inherit' });

// Commit
console.log('💾 Committing changes...');
execSync('git commit -m "Deploy to GitHub Pages"', { stdio: 'inherit' });

// Push to origin
console.log('📤 Pushing to GitHub...');
execSync('git push origin gh-pages --force', { stdio: 'inherit' });

// Switch back to main
console.log('🔄 Switching back to main branch...');
execSync('git checkout main', { stdio: 'inherit' });

console.log('✅ Deployment complete!');
console.log('🌐 Your site should be available at: https://rohitsiwach.github.io/personal-website'); 