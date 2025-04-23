export async function previewCanvasToAppHome({
  app,
  userId,
  blocks,
}: {
  app: any;
  userId: string;
  blocks: any[];
}) {
  await app.client.views.publish({
    user_id: userId,
    view: {
      type: "home",
      blocks,
    },
  });
}
