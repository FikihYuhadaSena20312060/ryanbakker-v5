#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Check if sharp is available, if not install it
try {
  require('sharp');
} catch (error) {
  console.log('Installing sharp for image optimization...');
  execSync('npm install sharp --save-dev', { stdio: 'inherit' });
}

const sharp = require('sharp');

const heroDir = path.join(__dirname, '../public/hero');
const projectDir = path.join(__dirname, '../project-images');

// Create optimized directories
const optimizedHeroDir = path.join(__dirname, '../public/hero-optimized');
const optimizedProjectDir = path.join(__dirname, '../project-images-optimized');

if (!fs.existsSync(optimizedHeroDir)) {
  fs.mkdirSync(optimizedHeroDir, { recursive: true });
}

if (!fs.existsSync(optimizedProjectDir)) {
  fs.mkdirSync(optimizedProjectDir, { recursive: true });
}

async function optimizeImage(inputPath, outputPath, options = {}) {
  const {
    width,
    height,
    quality = 85,
    format = 'webp'
  } = options;

  try {
    let pipeline = sharp(inputPath);
    
    if (width || height) {
      pipeline = pipeline.resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    if (format === 'webp') {
      pipeline = pipeline.webp({ quality });
    } else if (format === 'avif') {
      pipeline = pipeline.avif({ quality });
    } else if (format === 'jpeg') {
      pipeline = pipeline.jpeg({ quality });
    } else if (format === 'png') {
      pipeline = pipeline.png({ quality });
    }

    await pipeline.toFile(outputPath);
    console.log(`✓ Optimized: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`✗ Failed to optimize ${inputPath}:`, error.message);
  }
}

async function optimizeHeroImages() {
  console.log('Optimizing hero images...');
  
  const heroFiles = fs.readdirSync(heroDir).filter(file => file.endsWith('.png'));
  
  for (const file of heroFiles) {
    const inputPath = path.join(heroDir, file);
    const baseName = path.parse(file).name;
    
    // Create multiple optimized versions
    await optimizeImage(inputPath, path.join(optimizedHeroDir, `${baseName}.webp`), {
      quality: 90,
      format: 'webp'
    });
    
    await optimizeImage(inputPath, path.join(optimizedHeroDir, `${baseName}.avif`), {
      quality: 90,
      format: 'avif'
    });
  }
}

async function optimizeProjectImages() {
  console.log('Optimizing project images...');
  
  const projectFiles = fs.readdirSync(projectDir).filter(file => file.endsWith('.png'));
  
  for (const file of projectFiles) {
    const inputPath = path.join(projectDir, file);
    const baseName = path.parse(file).name;
    
    // Create optimized versions
    await optimizeImage(inputPath, path.join(optimizedProjectDir, `${baseName}.webp`), {
      quality: 85,
      format: 'webp'
    });
    
    await optimizeImage(inputPath, path.join(optimizedProjectDir, `${baseName}.avif`), {
      quality: 85,
      format: 'avif'
    });
  }
}

async function main() {
  console.log('Starting image optimization...');
  
  try {
    await optimizeHeroImages();
    await optimizeProjectImages();
    
    console.log('\n✅ Image optimization complete!');
    console.log('\nNext steps:');
    console.log('1. Update your image references to use the optimized versions');
    console.log('2. Consider implementing responsive images with different sizes');
    console.log('3. Test the performance improvements');
  } catch (error) {
    console.error('Error during optimization:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { optimizeImage, optimizeHeroImages, optimizeProjectImages };
