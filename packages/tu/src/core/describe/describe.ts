import chalk from "chalk";
import { TestExecutionContext } from "../execution-context/execution-context";

export async function describeContext(
  executionContext: TestExecutionContext
): Promise<(description: string, test: () => void) => Promise<void>> {
  return async function describe(description: string, test: () => void) {
    const blockExecutionContext = new TestExecutionContext();

    test.bind(blockExecutionContext);

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
