import { globby } from "globby";

export async function findTests() {
  const paths = await globby(["**/*.spec.ts", "**/*.test.ts"]);
  return paths;
}
