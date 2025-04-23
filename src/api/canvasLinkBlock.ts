export function canvasLinkBlock({
  canvasId,
  text,
}: {
  canvasId: string;
  text: string;
}) {
  return {
    type: "canvas",
    canvas_id: canvasId,
    text,
  };
}
