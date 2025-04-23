# API Reference

## `markdownToCanvasBlocks(markdown: string): CanvasBlock[]`

Converts Markdown into Slack Canvas block array.

---

## `createCanvas({ app, title, blocks, channelId })`

Creates a new canvas in Slack.

---

## `canvasLinkBlock({ canvasId, text })`

Returns a link block to another canvas.

---

## `previewCanvasToAppHome({ app, userId, blocks })`

Publishes blocks to the Slack App Home.

---

## `runGitTriggeredSync()`

Runs `yarn sync` and prints status, useful in GitHub Actions.
