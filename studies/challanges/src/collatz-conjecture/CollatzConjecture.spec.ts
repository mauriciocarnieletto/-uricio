import { CollatzConjecture } from "./CollatzConjecture";

describe("CollatzConjecture", () => {
  let collatz = new CollatzConjecture();

  it("find the next value receving an even number.", () => {
    expect(collatz.getNextNumberByEven(4)).toBe(2);
  });

  it("find the next value receving an even number.", () => {
    expect(collatz.getNextNumberByOdd(3)).toBe(10);
  });

  it("return the number with the greatest sequence of jumps..", async () => {
    const { number, sequenceLenght } = await collatz.getGreatestSequenceBetween(2, 1000000);
    expect(number).toBe(837799);
    expect(sequenceLenght).toBe(525);
  });
});
