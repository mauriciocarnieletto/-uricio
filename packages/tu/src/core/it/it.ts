import chalk from "chalk";

export async function it(description: string, test: () => void) {
  try {
    await test();
    console.log(chalk.green(`✓ ${description}`));
  } catch (e) {
    console.log(chalk.red(`✗ ${description}`));
    console.error(e);
  }
}
