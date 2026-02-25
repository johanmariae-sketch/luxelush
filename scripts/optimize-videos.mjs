import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";
import { mkdir } from "fs/promises";
import { join, resolve } from "path";

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

const ROOT = resolve(import.meta.dirname, "..");
const REF = join(ROOT, "reference", "Nicolas Pagina");
const FOTOS = join(REF, "fotos ropa");
const PUBLIC_VIDEOS = join(ROOT, "public", "videos");

// Video mappings
const VIDEOS = [
  {
    src: join(FOTOS, "WhatsApp Video 2026-02-24 at 2.56.16 PM.mp4"),
    dest: "promo-1.mp4",
  },
  {
    src: join(FOTOS, "WhatsApp Video 2026-02-24 at 2.56.17 PM.mp4"),
    dest: "promo-2.mp4",
  },
  {
    src: join(REF, "IMG_7209.MP4"),
    dest: "lookbook-1.mp4",
  },
  {
    src: join(REF, "IMG_7210.MP4"),
    dest: "lookbook-2.mp4",
  },
  {
    src: join(REF, "IMG_7211.MP4"),
    dest: "lookbook-3.mp4",
  },
  {
    src: join(REF, "IMG_7213.MP4"),
    dest: "lookbook-4.mp4",
  },
  {
    src: join(REF, "IMG_7214.MP4"),
    dest: "lookbook-5.mp4",
  },
  {
    src: join(REF, "IMG_7215.MP4"),
    dest: "lookbook-6.mp4",
  },
  {
    // MOV file - convert to MP4
    src: join(REF, "IMG_7212.MOV"),
    dest: "hero-video.mp4",
  },
];

function optimizeVideo(src, dest) {
  return new Promise((resolve, reject) => {
    const outputPath = join(PUBLIC_VIDEOS, dest);
    console.log(`  ⏳ Processing ${dest}...`);

    ffmpeg(src)
      // Video settings: H.264, good quality, smaller file
      .videoCodec("libx264")
      .addOption("-crf", "28") // Quality (18=best, 28=good web quality, 51=worst)
      .addOption("-preset", "slow") // Better compression
      .addOption("-profile:v", "main")
      .addOption("-movflags", "+faststart") // Web streaming optimization
      // Resize to max 720p height (portrait video)
      .addOption("-vf", "scale='min(720,iw)':'min(1280,ih)':force_original_aspect_ratio=decrease")
      // Audio settings: AAC, 128kbps
      .audioCodec("aac")
      .audioBitrate("128k")
      .audioChannels(2)
      .on("end", () => {
        console.log(`  ✓ ${dest} → done`);
        resolve();
      })
      .on("error", (err) => {
        console.error(`  ✗ ${dest} error:`, err.message);
        reject(err);
      })
      .save(outputPath);
  });
}

async function main() {
  console.log("🎬 LuxeLush Video Optimization\n");

  await mkdir(PUBLIC_VIDEOS, { recursive: true });

  for (const video of VIDEOS) {
    try {
      await optimizeVideo(video.src, video.dest);
    } catch (err) {
      console.error(`  Skipping ${video.dest} due to error`);
    }
  }

  console.log("\n✅ All videos processed!");
}

main().catch(console.error);
