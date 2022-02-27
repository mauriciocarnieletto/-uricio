import fg from "fast-glob";

export async function findFilesByPattern(pattern: string | string[]) {
  const paths = await fg(pattern, {
    ignore: ["**/node_modules/**", "**/src/**"],
  });
  return paths;
}
