import { init } from "../../core/init";

export async function runner(filesToRun: string[]) {
  const { setupGlobals, executionContext } = await init();
  await setupGlobals();
  await Promise.all(
    filesToRun.map((file) => import(`${process.cwd()}/${file}`))
  );

  console.log(executionContext);

  executionContext.executions.map((execution) => execution.test());


}
