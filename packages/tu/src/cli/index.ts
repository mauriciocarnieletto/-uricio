import { findFilesByPattern } from "./find-files";
import yargs from "yargs";
import { getConfig } from "./config/config";
import { runner } from "./runner";

const options = yargs.usage("$0 <cmd> [args]").argv;

export async function run() {
  const { testFileSuffix } = await getConfig();
  const testFiles = await findFilesByPattern(`**/(expect).${testFileSuffix}`);
  runner(testFiles);
}
