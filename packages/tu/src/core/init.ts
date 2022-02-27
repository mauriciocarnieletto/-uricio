import { describeContext } from "./describe";
import { TestExecutionContext } from "./execution-context/execution-context";
import { expect } from "./expect";
import { it } from "./it";

async function setupGlobalsContext(executionContext: TestExecutionContext) {
  return async function setupGlobals() {
    global.expect = expect;
    global.it = it;
    global.describe = await describeContext(executionContext);
  };
}

export async function init() {
  const executionContext = new TestExecutionContext();
  return {
    executionContext,
    setupGlobals: await setupGlobalsContext(executionContext),
  };
}
