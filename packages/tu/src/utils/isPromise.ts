/**
 * Checks if the given value is a promise.
 * Got from https://github.com/facebook/jest/blob/main/packages/expect/src/index.ts
 * @param obj
 * @returns
 */
export const isPromise = <T extends any>(obj: any): obj is PromiseLike<T> =>
  !!obj &&
  (typeof obj === "object" || typeof obj === "function") &&
  typeof obj.then === "function";
