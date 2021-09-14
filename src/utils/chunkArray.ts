// chunks array into chunks of maximum size
// evenly distributes items among the chunks
/* tslint:disable */

export default function chunkArray<T>(items: T[], maxChunkSize: number): T[][] {
  if (maxChunkSize < 1) throw new Error("maxChunkSize must be gte 1");
  if (items.length <= maxChunkSize) return [items];

  const numChunks: number = Math.ceil(items.length / maxChunkSize);
  const chunkSize = Math.ceil(items.length / numChunks);

  /* eslint-disable-next-line */
  return [...(Array(numChunks).keys() as any)].map((ix) =>
    items.slice(ix * chunkSize, ix * chunkSize + chunkSize)
  );
}
