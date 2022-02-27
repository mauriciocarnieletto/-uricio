import { findTests } from "./tests-searcher";
import yargs from "yargs";

yargs.usage("$0 <cmd> [args]");

export async function run() {
  await findTests();
}
