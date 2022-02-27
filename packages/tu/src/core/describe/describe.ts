import chalk from "chalk";

export async function describeContext(
  executionContext: any
): Promise<(description: string, test: () => void) => Promise<void>> {
  return async function describe(description: string, test: () => void) {
    try {
      await test();
      chalk.green(`✓ ${description}`);
    } catch (e) {
      chalk.red(`✗ ${description}`);
      console.error(e);
    }
  };
}
