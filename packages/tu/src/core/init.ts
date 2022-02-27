import { describeContext } from "./describe";
import { expect } from "./expect";
import { it } from "./it";



async function setupGlobalsContext(executionContext: ExecutionContext) {
  return async function setupGlobals() {
    global.expect = expect;
    global.it = it;
    global.describe = await describeContext(executionContext);
  };
}

export async function init() {
  const executionContext: ExecutionContext = {
    push: (microContext) => {
      console.log("pushed in a micro context", microContext);
    },
  };
  return {
    setupGlobals: await setupGlobalsContext(executionContext),
  };
}
