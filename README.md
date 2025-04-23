# @ckersey2/slack-canvas-docs

📚 Sync your Markdown documentation and images to Slack Canvases using this utility package.

Built to support engineering docs, living technical documentation, and Slack-native onboarding or collaboration spaces using the Slack Canvas API.

---

## ✨ Features

- Convert Markdown to Slack Canvas block format
- Upload and cache images using Slack Files API
- Update Canvas documents using Slack’s private `conversations.canvas.update` API
- TypeScript support with full type exports
- CLI ready for automation and CI/CD

---

## 🚀 Installation

```bash
yarn add @ckersey2/slack-canvas-docs
# or
npm install @ckersey2/slack-canvas-docs
```

---

## 📦 Usage

### Convert Markdown to Canvas Blocks

```ts
import { markdownToCanvasBlocks } from "@ckersey2/slack-canvas-docs";

const md = "# Hello Canvas\n\nThis is _markdown_";
const blocks = markdownToCanvasBlocks(md);
console.log(blocks);
```

---

### Sync Markdown to Canvas (CLI)

```bash
SLACK_BOT_TOKEN=xoxb-... SLACK_IMAGE_CHANNEL_ID=C123... yarn sync
```

You must define a map of markdown files to canvas IDs inside `syncDocsToCanvas.ts`.

---

## 🧠 File Map Example

Inside `src/syncDocsToCanvas.ts`:

```ts
const docMap: Record<string, string> = {
  "index.md": "abc123",
  "getting-started.md": "def456"
};
```

---

## 🔐 Environment Variables

- `SLACK_BOT_TOKEN`: Your Slack bot token
- `SLACK_IMAGE_CHANNEL_ID`: The channel used to upload and host image files
  - Uploaded image URLs are private but accessible to users who can view the canvas

---

## 🛠 Development

```bash
yarn build     # compile to dist/
yarn sync      # run the syncDocsToCanvas script
```

---

## 📁 Project Structure

```
.
├── src/
│   ├── canvasTypes.ts
│   ├── markdownToCanvas.ts
│   └── syncDocsToCanvas.ts
├── tsconfig.json
└── package.json
```

---

## 🔮 Future Ideas

- Canvas diff and version history
- Two-way sync (Canvas → Markdown)
- Canvas templates and snippet libraries
- Interactive blocks and Slack workflows
- Local web-based Canvas preview
- Multi-workspace and multi-channel sync support
- GitHub App integration for PR-based preview + approval


---

## 📄 License

MIT
