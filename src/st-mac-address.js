import { NotImplementedError } from "../extensions/index.js";

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (n.length != 17) {
    return false;
  }
  let arr = n.split("-");
  let regex1 = /[A-F]/g;
  let regex2 = /[0-9]/g;
  for (let i of arr) {
    if (
      (i[0].match(regex1) || i[0].match(regex2)) &&
      (i[1].match(regex1) || i[1].match(regex2))
    ) {
      return true;
    } else return false;
  }
}
isMAC48Address("Z1-1B-63-84-45-E6");
