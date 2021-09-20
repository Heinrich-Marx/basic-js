import { NotImplementedError } from "../extensions/index.js";

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
export default function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let arrBig = s1.length >= s2.length ? s1.split("") : s2.split("");
  let arrSmall = s1.length >= s2.length ? s2.split("") : s1.split("");
  let le = arrSmall.length;
  let count = 0;
  for (let i = 0; i < le; i++) {
    if (arrBig.includes(arrSmall[0])) {
      arrBig.splice(
        arrBig.findIndex((el) => el == arrSmall[0]),
        1
      );
      arrSmall.splice(0, 1);
      count++;
    } else {
      arrSmall.splice(0, 1);
    }
  }
  return count;
}
