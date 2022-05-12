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
