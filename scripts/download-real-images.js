const fs = require('fs');
const sharp = require('sharp');

async function downloadToBuffer(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP error ${res.status} for ${url}`);
  return Buffer.from(await res.arrayBuffer());
}

async function prepareImages() {
  console.log('Downloading images...');

  // 1. Hero background: Futuristic network & technology
  const heroUrl = 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=85';
  const heroBuf = await downloadToBuffer(heroUrl);

  // We want a subtle, elegant high-key treatment so light theme text pops, with blue tint
  await sharp(heroBuf)
    .resize(2000, 1100, { fit: 'cover' })
    .modulate({ brightness: 1.15, saturation: 1.1 })
    .webp({ quality: 90 })
    .toFile('./public/images/hero-bg-real.webp');
  console.log('Hero background saved to ./public/images/hero-bg-real.webp');

  // 2. Portfolio Item 1: Restaurant POS & Kitchen Display
  const posUrl = 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1000&q=80';
  const posBuf = await downloadToBuffer(posUrl);
  await sharp(posBuf)
    .resize(800, 450, { fit: 'cover' })
    .webp({ quality: 90 })
    .toFile('./public/images/portfolio/restaurant-pos-real.webp');
  console.log('POS saved');

  // 3. Portfolio Item 2: Corporate Web Experience
  const webUrl = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80';
  const webBuf = await downloadToBuffer(webUrl);
  await sharp(webBuf)
    .resize(800, 450, { fit: 'cover' })
    .webp({ quality: 90 })
    .toFile('./public/images/portfolio/corporate-web-real.webp');
  console.log('Corporate Web saved');

  // 4. Portfolio Item 3: Artful Creation (Digital Marketing)
  const mktgUrl = 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1000&q=80';
  const mktgBuf = await downloadToBuffer(mktgUrl);
  await sharp(mktgBuf)
    .resize(800, 450, { fit: 'cover' })
    .webp({ quality: 90 })
    .toFile('./public/images/portfolio/digital-marketing-real.webp');
  console.log('Marketing saved');

  // 5. Portfolio Item 4: Enterprise Management System
  const erpUrl = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80';
  const erpBuf = await downloadToBuffer(erpUrl);
  await sharp(erpBuf)
    .resize(800, 450, { fit: 'cover' })
    .webp({ quality: 90 })
    .toFile('./public/images/portfolio/enterprise-app-real.webp');
  console.log('Enterprise ERP saved');

  // Clean up test file
  if (fs.existsSync('./public/images/test.jpg')) {
    fs.unlinkSync('./public/images/test.jpg');
  }

  console.log('All real images downloaded and optimized successfully!');
}

prepareImages().catch(console.error);
