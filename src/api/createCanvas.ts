export async function createCanvas({
  app,
  title,
  blocks,
  channelId,
}: {
  app: any;
  title: string;
  blocks: any[];
  channelId: string;
}): Promise<string> {
  const result = await app.client.apiCall("conversations.canvas.create", {
    title,
    content: { blocks },
    channel_id: channelId,
  });
  return result.canvas_id;
}
