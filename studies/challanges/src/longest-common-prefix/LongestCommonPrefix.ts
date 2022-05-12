/**
 * Source = https://leetcode.com/problems/longest-common-prefix/

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
* @param strs
 * @returns
 */
export function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }

  const firstWord = strs.shift() as string;
  const words = strs;

  const commonPrefixes = words.map((word) => getCommonPrefix(firstWord, word));

  const prefixesThatMatch = commonPrefixes.filter((prefix) =>
    commonPrefixes.every((otherPrefix) => otherPrefix.indexOf(prefix) === 0)
  );

  const greatestPrefix = prefixesThatMatch.sort((a, b) => b.length - a.length)[0];

  return greatestPrefix;
}

function getCommonPrefix(word1: string, word2: string): string {
  let commonPrefix = "";

  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      break;
    }
    commonPrefix += word1[i];
  }

  return commonPrefix;
}
