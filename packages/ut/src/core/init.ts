import { describeContext } from "./describe";
import { TestExecutionContext } from "./execution-context/execution-context";
import { expect } from "./expect";
import { itContext } from "./it";

async function setupGlobalsContext(executionContext: TestExecutionContext) {
  return async function setupGlobals() {
    global.expect = expect;
    global.it = await itContext(executionContext);
    global.describe = await describeContext(executionContext);
  };
}

export async function init() {
  const testExecutionContext = new TestExecutionContext();
  return {
    executionContext: testExecutionContext,
    setupGlobals: await setupGlobalsContext(testExecutionContext),
  };
}
