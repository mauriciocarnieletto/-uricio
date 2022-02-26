export function expect<Type>(data: Type) {
  return {
    toBe: (expected: Type) => {
      if (data !== expected) {
        throw new Error(`Expected ${data} to be ${expected}`);
      }
    },
    toBeShallowEqual: (expected: Type) => {
      if (data !== expected) {
        throw new Error(`Expected ${data} to be ${expected}`);
      }
    },
  };
}
