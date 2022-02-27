import chalk from "chalk";

export async function describeContext(
  executionContext: ExecutionContext
): Promise<(description: string, test: () => void) => Promise<void>> {
  return async function describe(description: string, test: () => void) {
    executionContext.push({ description, test });
    try {
      await test();
      console.log(chalk.green(`✓ ${description}`));
    } catch (e) {
      console.log(chalk.red(`✗ ${description}`));
      console.error(e);
    }
  };
}
