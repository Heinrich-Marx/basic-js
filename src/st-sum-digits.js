import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
export default function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let a = 0;
  // let func = (value) => {
  //   if (a < 10 && value < 10) {
  //     return a;
  //   } else {
  //     value = value + "";
  //     value = value.split("");
  //     for (let i = 0; i < value.length; i++) {
  //       a += +value[i];
  //     }
  //     if (a < 10) {
  //       return a;
  //     } else {
  //       n = a;
  //       return func(a);
  //     }
  //   }
  // };
  //func(n);
  return n < 10
    ? n
    : getSumOfDigits((n % 10) + getSumOfDigits(Math.floor(n / 10)));
}
//getSumOfDigits(91);
