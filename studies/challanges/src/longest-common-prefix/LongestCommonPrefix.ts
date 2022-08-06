function mauLongestCommonPrefix(strs: string[]): string {
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

function rafaLongestCommonPrefix(strs: string[]): string {
  let res = strs[0];

  for (let i = 1; i < strs.length; i += 1) {
    const word = strs[i];

    for (let j = 0; j < res.length; j += 1) {
      if (word[j] !== res[j]) res = res.substring(0, j);
    }
  }

  return res;
}

const upVotedLongestCommonPrefix = function (strs: string[]): string {
  "use strict";
  if (strs === undefined || strs.length === 0) {
    return "";
  }

  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};

export const longestCommonPrefix = rafaLongestCommonPrefix;
