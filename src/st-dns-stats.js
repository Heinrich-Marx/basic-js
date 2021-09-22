import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // domains = domains.reverse()
  // let arr = []
  // let obj = {}
  // for (let i = 0; i < domains.length; i++) {
  //   let a = domains[i].split(".");
  //   a = a.reverse()
  //   domains[i] = a;
  // }
  let obj = {};
  let str = "";
  for (let el of domains) {
    let value = el.split(".").reverse();
    for (let i = 0; i < value.length; i++) {
      str += "." + value[i];
      // obj[str] = obj[str] ? obj[str] + 1 : 1;
      if (obj[str]) {
        obj[str] = obj[str] + 1;
      } else {
        obj[str] = 1;
      }
    }
    str = "";
  }
  return obj;
}
