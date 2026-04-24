import sharp from "sharp";
import { mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

mkdirSync(join(root, "public", "brand"), { recursive: true });

async function removeWhiteAndCrop(inputPath, outputPath, whiteThreshold = 220) {
  console.log(`\nProcessing: ${inputPath}`);

  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  const buf = Buffer.from(data);

  // --- 1. White-removal pass ---
  for (let i = 0; i < buf.length; i += channels) {
    const r = buf[i], g = buf[i + 1], b = buf[i + 2];
    const isNearWhite = r >= whiteThreshold && g >= whiteThreshold && b >= whiteThreshold;
    if (isNearWhite) buf[i + 3] = 0; // set alpha = 0
  }

  // --- 2. Find tight bounding box ---
  let minX = width, minY = height, maxX = 0, maxY = 0;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const alpha = buf[(y * width + x) * channels + 3];
      if (alpha > 10) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  // Add 2px padding around content
  const pad = 2;
  minX = Math.max(0, minX - pad);
  minY = Math.max(0, minY - pad);
  maxX = Math.min(width - 1, maxX + pad);
  maxY = Math.min(height - 1, maxY + pad);

  const cropW = maxX - minX + 1;
  const cropH = maxY - minY + 1;

  console.log(`  Original: ${width}×${height}  →  Cropped: ${cropW}×${cropH}`);
  console.log(`  Bounding box: (${minX},${minY}) → (${maxX},${maxY})`);

  // --- 3. Write processed raw buffer back through sharp for cropping ---
  await sharp(buf, { raw: { width, height, channels } })
    .extract({ left: minX, top: minY, width: cropW, height: cropH })
    .png({ compressionLevel: 9 })
    .toFile(outputPath);

  console.log(`  ✓ Saved: ${outputPath}`);
}

await removeWhiteAndCrop(
  join(root, "public", "brand-icon.png"),
  join(root, "public", "brand", "thunderfix-symbol-transparent.png")
);

await removeWhiteAndCrop(
  join(root, "public", "brand-wordmark.jpg"),
  join(root, "public", "brand", "thunderfix-wordmark-transparent.png")
);

console.log("\n✅ All done.");
