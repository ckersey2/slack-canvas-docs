import fs from "fs";
import path from "path";
import { App } from "@slack/bolt";
import { markdownToCanvasBlocks } from "./markdownToCanvas";
import { CanvasBlock } from "./canvasTypes";

const slackToken = process.env.SLACK_BOT_TOKEN!;
const app = new App({ token: slackToken, signingSecret: "ignored" });

const DOCS_DIR = path.resolve("docs");
const IMAGE_CACHE_FILE = path.resolve("canvasImageCache.json");

let imageCache: Record<string, string> = {};
if (fs.existsSync(IMAGE_CACHE_FILE)) {
  imageCache = JSON.parse(fs.readFileSync(IMAGE_CACHE_FILE, "utf-8"));
}

async function uploadImageToSlack(filePath: string): Promise<string> {
  const fileName = path.basename(filePath);
  if (imageCache[fileName]) return imageCache[fileName];

  const upload = await app.client.files.upload({
    channels: process.env.SLACK_IMAGE_CHANNEL_ID!,
    file: fs.createReadStream(filePath),
    filename: fileName,
    title: fileName,
  });

  const url = upload.file?.url_private!;
  imageCache[fileName] = url;
  fs.writeFileSync(IMAGE_CACHE_FILE, JSON.stringify(imageCache, null, 2));
  return url;
}

function replaceImageMarkdown(content: string): string {
  return content.replace(/!\[(.*?)\]\((.*?)\)/g, (_, alt, relPath) => {
    const fullPath = path.resolve(DOCS_DIR, relPath);
    const imageUrl = imageCache[path.basename(fullPath)] || relPath;
    return `![${alt}](${imageUrl})`;
  });
}

async function syncMarkdownFile(filePath: string, canvasId: string): Promise<void> {
  const raw = fs.readFileSync(filePath, "utf-8");
  const replaced = replaceImageMarkdown(raw);
  const blocks: CanvasBlock[] = markdownToCanvasBlocks(replaced);

  await app.client.apiCall("conversations.canvas.update", {
    canvas_id: canvasId,
    content: { blocks },
  });

  console.log(`Updated canvas: ${canvasId} from ${path.basename(filePath)}`);
}

// Example: map of docs to canvas IDs
const docMap: Record<string, string> = {
  "index.md": "abc123",
  "getting-started.md": "def456",
};

(async () => {
  for (const [relativePath, canvasId] of Object.entries(docMap)) {
    const fullPath = path.resolve(DOCS_DIR, relativePath);

    const raw = fs.readFileSync(fullPath, "utf-8");
    const imageMatches = [...raw.matchAll(/!\[.*?\]\((.*?)\)/g)];
    for (const [, relImage] of imageMatches) {
      const absImagePath = path.resolve(DOCS_DIR, relImage);
      await uploadImageToSlack(absImagePath);
    }

    await syncMarkdownFile(fullPath, canvasId);
  }
})();
