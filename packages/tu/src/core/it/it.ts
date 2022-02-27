import chalk from "chalk";

export async function it(description: string, test: () => void) {
  try {
    await test();
    chalk.green(`✓ ${description}`);
  } catch (e) {
    chalk.red(`✗ ${description}`);
    console.error(e);
  }
}
