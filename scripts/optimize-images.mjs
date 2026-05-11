#!/usr/bin/env node
import { readdir, stat } from 'node:fs/promises';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const DIRS = ['public/aquila-36', 'public/aquila-54'];
const SOURCE_EXT = /\.(jpe?g|png)$/i;
const FULL_QUALITY = 80;
const THUMB_QUALITY = 75;
const THUMB_WIDTH = 800;

async function isUpToDate(srcPath, outPath) {
  try {
    const [src, out] = await Promise.all([stat(srcPath), stat(outPath)]);
    return out.mtimeMs >= src.mtimeMs;
  } catch {
    return false;
  }
}

async function convert(srcPath, outPath, opts) {
  if (await isUpToDate(srcPath, outPath)) return { skipped: true, bytes: 0 };
  let pipeline = sharp(srcPath).rotate();
  if (opts.width) pipeline = pipeline.resize({ width: opts.width, withoutEnlargement: true });
  await pipeline.webp({ quality: opts.quality }).toFile(outPath);
  const { size } = await stat(outPath);
  return { skipped: false, bytes: size };
}

async function processDir(dir) {
  const entries = await readdir(dir);
  const sources = entries.filter((f) => SOURCE_EXT.test(f));
  let srcTotal = 0;
  let fullTotal = 0;
  let thumbTotal = 0;
  let converted = 0;
  let skipped = 0;

  for (const file of sources) {
    const srcPath = join(dir, file);
    const { name } = parse(file);
    const fullOut = join(dir, `${name}.webp`);
    const thumbOut = join(dir, `${name}-thumb.webp`);

    const { size: srcSize } = await stat(srcPath);
    srcTotal += srcSize;

    const full = await convert(srcPath, fullOut, { quality: FULL_QUALITY });
    const thumb = await convert(srcPath, thumbOut, { quality: THUMB_QUALITY, width: THUMB_WIDTH });

    const fullSize = full.skipped ? (await stat(fullOut)).size : full.bytes;
    const thumbSize = thumb.skipped ? (await stat(thumbOut)).size : thumb.bytes;
    fullTotal += fullSize;
    thumbTotal += thumbSize;

    if (full.skipped && thumb.skipped) {
      skipped++;
    } else {
      converted++;
      const pct = (((srcSize - fullSize) / srcSize) * 100).toFixed(0);
      console.log(`  ${file}: ${(srcSize / 1024 / 1024).toFixed(2)}MB → ${(fullSize / 1024 / 1024).toFixed(2)}MB webp (-${pct}%), ${(thumbSize / 1024).toFixed(0)}KB thumb`);
    }
  }

  const mb = (b) => (b / 1024 / 1024).toFixed(2);
  console.log(`\n${dir}: ${converted} converted, ${skipped} up-to-date`);
  console.log(`  source jpeg: ${mb(srcTotal)} MB`);
  console.log(`  full webp:   ${mb(fullTotal)} MB  (lightbox)`);
  console.log(`  thumb webp:  ${mb(thumbTotal)} MB  (grid)`);
  console.log(`  grid load is now ${mb(thumbTotal)} MB instead of ${mb(srcTotal)} MB\n`);
}

for (const dir of DIRS) {
  console.log(`Optimizing ${dir}...`);
  await processDir(dir);
}
