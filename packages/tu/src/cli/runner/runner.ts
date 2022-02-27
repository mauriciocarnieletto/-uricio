import { init } from "../../core/init";

export async function runner(filesToRun: string[]) {
  await (await init()).setupGlobals();
  for (const file of filesToRun) {
    await import(`${process.cwd()}/${file}`);
  }
}
