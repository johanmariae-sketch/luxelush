import sharp from "sharp";
import { mkdir } from "fs/promises";
import { join, resolve } from "path";

const ROOT = resolve(import.meta.dirname, "..");
const REF = join(ROOT, "reference", "Nicolas Pagina");
const FOTOS = join(REF, "fotos ropa");
const PUBLIC = join(ROOT, "public", "images", "instagram");

// 6 images for Instagram grid (square format) - pick diverse, unused photos
const IMAGES = [
  join(FOTOS, "WhatsApp Image 2026-02-24 at 2.58.55 PM (1).jpeg"),  // denim outfit
  join(FOTOS, "WhatsApp Image 2026-02-24 at 2.58.56 PM.jpeg"),      // casual denim
  join(FOTOS, "WhatsApp Image 2026-02-24 at 2.59.32 PM (4).jpeg"),  // red conjunto
  join(FOTOS, "WhatsApp Image 2026-02-24 at 3.00.42 PM (3).jpeg"),  // embroidered jeans
  join(FOTOS, "WhatsApp Image 2026-02-24 at 3.00.16 PM (2).jpeg"),  // wide leg white top
  join(FOTOS, "WhatsApp Image 2026-02-24 at 3.00.42 PM (2).jpeg"),  // bootcut flare
];

async function main() {
  console.log("📸 Optimizing Instagram grid images...\n");
  await mkdir(PUBLIC, { recursive: true });

  for (let i = 0; i < IMAGES.length; i++) {
    const dest = join(PUBLIC, `insta-${i + 1}.jpg`);
    const webpDest = join(PUBLIC, `insta-${i + 1}.webp`);

    await sharp(IMAGES[i])
      .resize(500, 500, { fit: "cover", position: "attention" })
      .jpeg({ quality: 80, progressive: true, mozjpeg: true })
      .toFile(dest);

    await sharp(IMAGES[i])
      .resize(500, 500, { fit: "cover", position: "attention" })
      .webp({ quality: 78, effort: 6 })
      .toFile(webpDest);

    console.log(`  ✓ insta-${i + 1}.jpg + .webp`);
  }

  console.log("\n✅ Instagram images done!");
}

main().catch(console.error);
