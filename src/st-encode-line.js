import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let string = "";
  let count = 1;
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        string += count + arr[i];
        count = 1;
      } else {
        string += arr[i];
        count = 1;
      }
    }
  }
  return string;
}
