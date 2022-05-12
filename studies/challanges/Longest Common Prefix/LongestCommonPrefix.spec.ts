import { longestCommonPrefix } from "./LongestCommonPrefix";

describe("Longest Common Prefix", () => {
  it(`["c", "c"]`, () => {
    expect(longestCommonPrefix(["c", "c"])).toBe("c");
  });
  it(`["abc", "abc"]`, () => {
    expect(longestCommonPrefix(["abc", "abc"])).toBe("abc");
  });
  it(`["abc", "abc", "abcd"]`, () => {
    expect(longestCommonPrefix(["abc", "abc", "abcd"])).toBe("abc");
  });
  it(`["flower", "flow", "flight"]`, () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });
  it(`["dog", "racecar", "car"]`, () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });
});
