import { marked } from "marked";
import { CanvasBlock } from "./canvasTypes";

export function markdownToCanvasBlocks(markdown: string): CanvasBlock[] {
  const tokens = marked.lexer(markdown);
  const blocks: CanvasBlock[] = [];

  for (const token of tokens) {
    switch (token.type) {
      case "heading":
        blocks.push({ type: "heading", text: token.text });
        break;
      case "paragraph":
        blocks.push({ type: "text", text: token.text });
        break;
      case "list":
        if (token.ordered) {
          blocks.push({
            type: "bullet_list",
            items: token.items.map((i: any) => i.text),
          });
        } else if (token.items[0]?.text.startsWith("[ ]") || token.items[0]?.text.startsWith("[x]")) {
          blocks.push({
            type: "checklist",
            items: token.items.map((i: any) => ({
              text: i.text.slice(3).trim(),
              checked: i.text.startsWith("[x]"),
            })),
          });
        } else {
          blocks.push({
            type: "bullet_list",
            items: token.items.map((i: any) => i.text),
          });
        }
        break;
      case "image":
        blocks.push({
          type: "image",
          image_url: token.href,
          alt_text: token.text,
        });
        break;
    }
  }

  return blocks;
}
