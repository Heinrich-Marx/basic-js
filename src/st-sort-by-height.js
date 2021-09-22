import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      obj[i] = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arr.splice(i, 1);
      i -= 1;
    }
  }
  if (arr.length > 0) arr = arr.sort((a, b) => a - b);
  for (let key in obj) {
    arr.splice(key, 0, obj[key]);
  }
  return arr;
}
