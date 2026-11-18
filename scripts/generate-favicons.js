const sharp = require('sharp');
const fs = require('fs');

async function generateFavicons() {
  const source = './public/logo/alvora-mark.png';
  if (!fs.existsSync(source)) {
    console.error('Source mark not found at', source);
    return;
  }

  const trimmed = await sharp(source).trim().toBuffer();

  // Helper to create square with mark centered
  async function makeSquareIcon(size, paddingRatio = 0.08) {
    const markSize = Math.max(1, Math.round(size * (1 - paddingRatio * 2)));
    const resizedMark = await sharp(trimmed)
      .resize({
        width: markSize,
        height: markSize,
        fit: 'inside',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .toBuffer();

    return sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      }
    })
    .composite([{ input: resizedMark, gravity: 'center' }])
    .png()
    .toBuffer();
  }

  // Generate PNGs
  const p16 = await makeSquareIcon(16, 0.05);
  const p32 = await makeSquareIcon(32, 0.06);
  const p48 = await makeSquareIcon(48, 0.08);
  const p180 = await makeSquareIcon(180, 0.1);
  const p192 = await makeSquareIcon(192, 0.1);
  const p512 = await makeSquareIcon(512, 0.1);

  fs.writeFileSync('./public/favicon-16x16.png', p16);
  fs.writeFileSync('./public/favicon-32x32.png', p32);
  fs.writeFileSync('./public/favicon-48x48.png', p48);
  fs.writeFileSync('./public/icon-192.png', p192);
  fs.writeFileSync('./public/icon-512.png', p512);
  fs.writeFileSync('./public/apple-touch-icon.png', p180);

  fs.writeFileSync('./src/app/icon.png', p192);
  fs.writeFileSync('./src/app/apple-icon.png', p180);

  // Build multi-resolution ICO file from 16, 32, 48 pngs
  const images = [
    { size: 16, buffer: p16 },
    { size: 32, buffer: p32 },
    { size: 48, buffer: p48 }
  ];

  const headerSize = 6;
  const dirEntrySize = 16;
  const numImages = images.length;
  let offset = headerSize + dirEntrySize * numImages;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // ICO type 1
  header.writeUInt16LE(numImages, 4); // Count

  const entries = [];
  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.size, 0); // width
    entry.writeUInt8(img.size, 1); // height
    entry.writeUInt8(0, 2); // color palette count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // offset
    offset += img.buffer.length;
    entries.push(entry);
  }

  const icoBuffer = Buffer.concat([header, ...entries, ...images.map(i => i.buffer)]);
  fs.writeFileSync('./public/favicon.ico', icoBuffer);
  fs.writeFileSync('./src/app/favicon.ico', icoBuffer);

  console.log('Successfully generated all favicons!');
}

generateFavicons();
