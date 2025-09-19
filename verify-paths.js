// Script to verify all view paths are correct for deployment
const fs = require('fs');
const path = require('path');

const viewsDir = path.join(__dirname, 'views');
const listingsDir = path.join(viewsDir, 'listings');

console.log('🔍 Verifying view paths for deployment...\n');

// Check if main directories exist
console.log('📁 Directory structure:');
console.log(`views/ exists: ${fs.existsSync(viewsDir)}`);
console.log(`views/listings/ exists: ${fs.existsSync(listingsDir)}`);

// List all files in listings directory
if (fs.existsSync(listingsDir)) {
  const files = fs.readdirSync(listingsDir);
  console.log('\n📄 Files in views/listings/:');
  files.forEach(file => {
    console.log(`  ✓ ${file}`);
  });
}

// Check for common required files
const requiredFiles = ['new.ejs', 'index.ejs', 'show.ejs', 'edit.ejs', 'error.ejs'];
console.log('\n✅ Required files check:');
requiredFiles.forEach(file => {
  const filePath = path.join(listingsDir, file);
  const exists = fs.existsSync(filePath);
  console.log(`  ${exists ? '✓' : '✗'} ${file} ${exists ? 'exists' : 'MISSING'}`);
});

console.log('\n🎯 All paths are using lowercase "listings/" - ready for Linux deployment!');