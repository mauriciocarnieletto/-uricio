import tsNode from "ts-node";
import { init } from "../../core/init";

export async function runner(filesToRun: string[]) {
  await init().setupGlobals();
  console.log(filesToRun);
  for (const file of filesToRun) {
    const filePath = `${process.cwd()}/${file}`;
    const testFile = await import(filePath);
    console.log(testFile, file);
  }
}
