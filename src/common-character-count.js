const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const count = {};

  // count the number of occurrences of each character in s1
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    count[char] = (count[char] || 0) + 1;
  }

  let commonCount = 0;

  // iterate through s2 and decrement count[char] for each character that is common to both s1 and s2
  for (let i = 0; i < s2.length; i++) {
    const char = s2[i];
    if (count[char]) {
      commonCount++;
      count[char]--;
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
