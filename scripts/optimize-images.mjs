import sharp from "sharp";
import { mkdir, copyFile } from "fs/promises";
import { join, resolve } from "path";

const ROOT = resolve(import.meta.dirname, "..");
const REF = join(ROOT, "reference", "Nicolas Pagina");
const FOTOS = join(REF, "fotos ropa");
const PUBLIC = join(ROOT, "public", "images");

// Target sizes for different uses
const SIZES = {
  product: { width: 800, height: 1067 }, // 3:4 aspect ratio
  category: { width: 800, height: 1000 }, // 4:5 aspect ratio
  hero: { width: 640, height: 853 }, // 3:4 aspect ratio
  logo: { width: 400, height: 400 },
};

// Image mappings: source -> target
const MAPPINGS = {
  products: [
    {
      // Jean Skinny Negro Clasico - White crop + dark skinny jeans (front/back)
      src: join(FOTOS, "WhatsApp Image 2026-02-24 at 2.58.56 PM (3).jpeg"),
      dest: "jean-skinny-negro-1.jpg",
      size: SIZES.product,
    },
    {
      // Jean Wide Leg Claro - Great wide leg light jeans
      src: join(FOTOS, "WhatsApp Image 2026-02-24 at 3.00.16 PM (3).jpeg"),
      dest: "jean-wide-leg-1.jpg",
      size: SIZES.product,
    },
    {
      // Top Amarillo Lace Up - Yellow lace-up top
      src: join(FOTOS, "WhatsApp Image 2026-02-24 at 2.58.55 PM.jpeg"),
      dest: "top-amarillo-1.jpg",
      size: SIZES.product,
    },
    {
      // Conjunto Deportivo Gris & Vino - Gray/wine tracksuit
      src: join(FOTOS, "WhatsApp Image 2026-02-24 at 2.59.32 PM (2).jpeg"),
      dest: "conjunto-gris-1.jpg",
      size: SIZES.product,
    },
    {
      // Jean Skinny Celeste - Light blue skinny jeans
      src: join(FOTOS, "WhatsApp Image 2026-02-24 at 2.58.56 PM (1).jpeg"),
      dest: "jean-celeste-1.jpg",
      size: SIZES.product,
    },
    {
      // Jean Wide Leg Oscuro - Dark jeans with lace white top
      src: join(FOTOS, "WhatsApp Image 2026-02-24 at 2.58.56 PM (2).jpeg"),
      dest: "jean-oscuro-1.jpg",
      size: SIZES.product,
    },
    {
      // Top Blanco Basico - White v-neck blouse
      src: join(FOTOS, "WhatsApp Image 2026-02-24 at 2.58.56 PM (4).jpeg"),
      dest: "top-blanco-1.jpg",
      size: SIZES.product,
    },
    {
      // Conjunto Casual Beige - Gray PKs casual set
      src: join(FOTOS, "WhatsApp Image 2026-02-24 at 2.59.32 PM (3).jpeg"),
      dest: "conjunto-beige-1.jpg",
      size: SIZES.product,
    },
  ],
  categories: [
    {
      // Jeans category - 3 models with different denim
      src: join(FOTOS, "WhatsApp Image 2026-02-24 at 2.58.56 PM (5).jpeg"),
      dest: "jeans.jpg",
      size: SIZES.category,
    },
    {
      // Tops category - Miu Miu white top
      src: join(FOTOS, "WhatsApp Image 2026-02-24 at 3.00.16 PM (1).jpeg"),
      dest: "tops.jpg",
      size: SIZES.category,
    },
    {
      // Conjuntos category - Black sporty 3-stripe set
      src: join(FOTOS, "WhatsApp Image 2026-02-24 at 2.59.31 PM.jpeg"),
      dest: "conjuntos.jpg",
      size: SIZES.category,
    },
    {
      // Lo Nuevo category - Red "No Excuses" conjunto
      src: join(FOTOS, "WhatsApp Image 2026-02-24 at 2.59.32 PM (4).jpeg"),
      dest: "nuevo.jpg",
      size: SIZES.category,
    },
  ],
  hero: [
    {
      // Hero 1 - Denim top + celeste jeans, arm-up pose
      src: join(FOTOS, "WhatsApp Image 2026-02-24 at 2.58.55 PM (3).jpeg"),
      dest: "hero-1.jpg",
      size: SIZES.hero,
    },
    {
      // Hero 2 - "Minimalist" black set at store
      src: join(FOTOS, "WhatsApp Image 2026-02-24 at 2.59.32 PM (1).jpeg"),
      dest: "hero-2.jpg",
      size: SIZES.hero,
    },
    {
      // Hero 3 - Conjunto negro con franjas blancas
      src: join(FOTOS, "WhatsApp Image 2026-02-24 at 2.59.32 PM.jpeg"),
      dest: "hero-3.jpg",
      size: SIZES.hero,
    },
    {
      // Hero 4 - Leather jacket + flare jeans (streetwear)
      src: join(FOTOS, "WhatsApp Image 2026-02-24 at 3.00.43 PM.jpeg"),
      dest: "hero-4.jpg",
      size: SIZES.hero,
    },
  ],
  logo: [
    {
      src: join(REF, "IMG_7208.PNG"),
      dest: "logo.png",
      size: SIZES.logo,
    },
  ],
};

async function optimizeImage(src, destDir, destName, targetSize) {
  const destPath = join(destDir, destName);
  const webpName = destName.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  const webpPath = join(destDir, webpName);

  try {
    // Generate optimized JPEG
    await sharp(src)
      .resize(targetSize.width, targetSize.height, {
        fit: "cover",
        position: "attention", // smart crop focusing on important areas
      })
      .jpeg({ quality: 82, progressive: true, mozjpeg: true })
      .toFile(destPath);

    // Generate WebP version
    await sharp(src)
      .resize(targetSize.width, targetSize.height, {
        fit: "cover",
        position: "attention",
      })
      .webp({ quality: 80, effort: 6 })
      .toFile(webpPath);

    const jpegInfo = await sharp(destPath).metadata();
    const webpInfo = await sharp(webpPath).metadata();

    console.log(
      `  ✓ ${destName} → JPEG: ${Math.round(jpegInfo.size / 1024)}KB | WebP: ${Math.round(webpInfo.size / 1024)}KB`
    );
  } catch (err) {
    console.error(`  ✗ Error processing ${destName}:`, err.message);
  }
}

async function optimizeLogo(src, destDir, destName, targetSize) {
  const destPath = join(destDir, destName);
  const webpName = destName.replace(/\.png$/i, ".webp");
  const webpPath = join(destDir, webpName);

  try {
    // Optimized PNG (keep transparency)
    await sharp(src)
      .resize(targetSize.width, targetSize.height, {
        fit: "contain",
        background: { r: 255, g: 255, b: 255, alpha: 0 },
      })
      .png({ quality: 85, compressionLevel: 9 })
      .toFile(destPath);

    // WebP version
    await sharp(src)
      .resize(targetSize.width, targetSize.height, {
        fit: "contain",
        background: { r: 255, g: 255, b: 255, alpha: 0 },
      })
      .webp({ quality: 85, effort: 6, alphaQuality: 90 })
      .toFile(webpPath);

    console.log(`  ✓ ${destName} → optimized PNG + WebP`);
  } catch (err) {
    console.error(`  ✗ Error processing ${destName}:`, err.message);
  }
}

async function main() {
  console.log("🖼️  LuxeLush Image Optimization\n");

  // Create output directories
  const dirs = [
    join(PUBLIC, "products"),
    join(PUBLIC, "categories"),
    join(PUBLIC, "logo"),
  ];
  for (const dir of dirs) {
    await mkdir(dir, { recursive: true });
  }

  // Process product images
  console.log("📦 Processing product images...");
  for (const img of MAPPINGS.products) {
    await optimizeImage(img.src, join(PUBLIC, "products"), img.dest, img.size);
  }

  // Process category images
  console.log("\n📂 Processing category images...");
  for (const img of MAPPINGS.categories) {
    await optimizeImage(
      img.src,
      join(PUBLIC, "categories"),
      img.dest,
      img.size
    );
  }

  // Process hero images (stored in products folder as referenced in code)
  console.log("\n🌟 Processing hero images...");
  for (const img of MAPPINGS.hero) {
    await optimizeImage(img.src, join(PUBLIC, "products"), img.dest, img.size);
  }

  // Process logo
  console.log("\n🏷️  Processing logo...");
  for (const img of MAPPINGS.logo) {
    await optimizeLogo(img.src, join(PUBLIC, "logo"), img.dest, img.size);
  }

  console.log("\n✅ All images optimized successfully!");
}

main().catch(console.error);
