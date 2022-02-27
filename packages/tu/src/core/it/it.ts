import chalk from "chalk";
import { TestExecutionContext } from "../execution-context/execution-context";

export async function itContext(
  executionContext: TestExecutionContext
): Promise<(description: string, test: () => void) => Promise<void>> {
  return async function describe(description: string, test: () => void) {
    executionContext.push({
      description,
      test: async () => {
        try {
          await test();
          console.log(chalk.green(`✓ ${description}`));
        } catch (e) {
          console.log(chalk.red(`✗ ${description}`));
          console.error(e);
        }
      },
    });
  };
}
