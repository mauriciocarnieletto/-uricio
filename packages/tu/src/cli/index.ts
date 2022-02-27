import { findTests } from "./tests-searcher";
import yargs from "yargs";

const options = yargs.usage("$0 <cmd> [args]").argv;

export async function run() {
  console.log(options);
  console.log(await findTests());
}
