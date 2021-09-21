import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = email.split("");
  let g;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "@") {
      g = arr.slice(i + 1);
    }
  }
  return g.join("");
}
