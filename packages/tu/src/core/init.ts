import { describeContext } from "./describe";
import { expect } from "./expect";
import { it } from "./it";

const textContext = {};

async function setupGlobals() {
  global.expect = expect;
  global.it = it;
  global.describe = await describeContext(textContext);
}

export function init() {
  return {
    setupGlobals,
  };
}
