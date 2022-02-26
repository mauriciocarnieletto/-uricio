export async function it(description: string, test: () => void) {
  try {
    await test();
    console.log("\x1b[32m%s\x1b[0m", `✓ ${description}`);
  } catch (e) {
    console.log("\x1b[31m%s\x1b[0m", `✗ ${description}`);
    console.error(e);
  }
}
