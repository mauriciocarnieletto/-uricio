import { TestError } from "../errors/TestError";

export function expect<Type>(data: Type) {
  return {
    toBe: (expected: Type) => {
      if (data !== expected) {
        throw new TestError(`Expected ${data} to be ${expected}`);
      }
    },
  };
}
