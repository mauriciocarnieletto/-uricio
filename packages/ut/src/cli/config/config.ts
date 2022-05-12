const DEFAULT_TEST_PATTERN = ["./src/**/*.spec.ts", "./src/**/*.test.ts"];
const DEFAULT_TEST_FILE_SULFIX = "spec.(ts|js|tsx|jsx)";
const DEFAULT_CONFIG_FILE_PATTH = process.cwd() + "/ut.config.js";

export interface Config {
  testFileSuffix: string;
  testPattern: string[] | string;
}

export async function getConfig(
  configFile: string = DEFAULT_CONFIG_FILE_PATTH
): Promise<Config> {
  try {
    const config = await require(configFile);
    return config;
  } catch {
    console.warn(
      `No config file found at ${configFile}, using default configuration.`
    );
  }

  return {
    testPattern: DEFAULT_TEST_PATTERN,
    testFileSuffix: DEFAULT_TEST_FILE_SULFIX,
  };
}
