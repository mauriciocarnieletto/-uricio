import fg from "fast-glob";

export async function findTests() {
  const paths = await fg(["./src/**/*.spec.ts", "./src/**/*.test.ts"]);
  return paths;
}
