import { NotImplementedError } from "../extensions/index.js";

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  n = n + "";
  let arr = n.split("");
  let min = arr[0];
  for (let i of arr) {
    i < min ? (min = i) : "";
  }
  let value = arr.indexOf(min);
  let a = arr.splice(value, 1);
  let str = arr.join("");
  return +str;
}
