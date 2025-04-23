export type CanvasBlock =
  | { type: "text"; text: string }
  | { type: "heading"; text: string }
  | { type: "bullet_list"; items: string[] }
  | { type: "checklist"; items: { text: string; checked: boolean }[] }
  | { type: "image"; image_url: string; alt_text?: string }
  | { type: "button"; text: string; url: string };
