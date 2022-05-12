import { DynamicArray } from "./DynamicArray";

describe("DynamicArray", () => {
  it("Should be able to initialize an array", () => {
    const array = new DynamicArray(10);
    expect(array).toBeTruthy();
  });
  it("Should be able to add a value", () => {
    const array = new DynamicArray<number>(10);
    array.add(1);
    expect(array.size).toBe(1);
  });
  it("Should be able to add a value and recover it", () => {
    const array = new DynamicArray<string>(10);
    array.add("batata");
    array.add("polenta");

    expect(array.get(0)).toBe("batata");
    expect(array.get(1)).toBe("polenta");
  });
  it("Should be able to set a value within an position", () => {
    const array = new DynamicArray(10);

    array.set(9, "batata");

    expect(array.get(9)).toBe("batata");
  });
  it("Should be able to tell a value index", () => {
    const array = new DynamicArray<string>(10);
    array.add("batata");
    array.add("polenta");

    expect(array.indexOf("polenta")).toBe(1);
  });
  it("Should be able to remove an value by index", () => {
    const array = new DynamicArray<string>(10);
    array.add("batata");
    array.add("polenta");
    expect(array.size).toBe(2);

    array.removeAt(1);
    expect(array.size).toBe(1);
    expect(array.get(1)).toBeUndefined();
  });
  it("Should be able to remove an value by value", () => {
    const array = new DynamicArray<string>(10);
    array.add("batata");
    array.add("polenta");
    expect(array.size).toBe(2);

    array.remove("polenta");
    expect(array.indexOf("polenta")).toBe(-1);
  });
  it("Should thrown an exception when it's initialized with a negative number", () => {
    const error = () => new DynamicArray<number>(-1);
    expect(error).toThrowError();
  });
  it("Should be able to clear the array", () => {
    const array = new DynamicArray<number>(10);
    array.add(1);
    array.add(2);

    expect(array.size).toBe(2);

    array.clear();

    expect(array.size).toBe(0);
    expect(array.get(1)).toBeFalsy();
  });
  it("Should be able if the array contains a value", () => {
    const array = new DynamicArray(10);
    array.add("batata");
    array.add("feijão");

    expect(array.contains("feijão")).toBeTruthy();
    expect(array.contains("polenta")).toBeFalsy();
  });
  it("Should print the array in a json notation", () => {
    const array = new DynamicArray(4);
    array.add(1);
    array.add(2);

    expect(array.toString()).toBe("[1,2,,]");
  });
  it("Should be able to store and double the capacity of the array", () => {
    const array = new DynamicArray(5);

    expect(array.capacity).toBe(5);
    for (let i = 0; i < 6; i++) {
      array.add(i);
    }
    expect(array.capacity).toBe(10);
  });
});
