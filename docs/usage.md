# Usage

## Convert Markdown to Canvas Blocks

```ts
import { markdownToCanvasBlocks } from "@ckersey2/slack-canvas-docs";

const blocks = markdownToCanvasBlocks("# Title\nSome text");
```

## Sync Markdown to Canvas

Define a `docMap` and run:

```bash
SLACK_BOT_TOKEN=... SLACK_IMAGE_CHANNEL_ID=... yarn sync
```

## Create a Canvas

```ts
import { createCanvas } from "@ckersey2/slack-canvas-docs";

await createCanvas({
  app,
  title: "New Canvas",
  blocks,
  channelId: "C12345678"
});
```

## GitHub Actions Support

You can run sync directly from CI using:

```ts
import { runGitTriggeredSync } from "@ckersey2/slack-canvas-docs";

runGitTriggeredSync();
```
