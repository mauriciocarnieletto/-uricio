import { TestError } from "../errors/TestError";

export function expect<Type>(data: Type): ExpectReturn<Type> {
  return {
    toBe: (expected: Type) => {
      if (data !== expected) {
        throw new TestError(`Expected ${data} to be ${expected}`);
      }
    },
    toBeTruthy: () => {
      if (!Boolean(data)) {
        throw new TestError(`Expected ${data} to be truthy`);
      }
    },
  };
}
