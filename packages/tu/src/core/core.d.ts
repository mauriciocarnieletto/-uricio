declare interface ExpectReturn<Type> {
  toBe(expected: Type): void;
  toBeTruthy(): void;
}

declare function describe(description: string, test: () => void): Promise<void>;
declare function it(description: string, test: () => void): Promise<void>;
declare function expect<Type>(data: Type): ExpectReturn<Type>;
