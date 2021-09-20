import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let addition1 =
    options.addition !== undefined ? String(options.addition) : "";
  let str2 = String(str);
  let separator = options.separator || "+"; // ???
  let additionSeparator = options.additionSeparator || "|"; // !!!
  let additionRepeatTimes = options.additionRepeatTimes || 1; // 3
  let repeatTimes = options.repeatTimes || 1; // 3
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    arr.push(addition1);
  }
  let miniString = arr.join(additionSeparator);
  let miniStr = str2 + miniString;
  for (let i = 0; i < repeatTimes; i++) {
    arr2.push(miniStr);
  }

  let string = arr2.join(separator);
  return string;
}
//repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' })
// nullnull!!!null!!!null???nullnull!!!null!!!null???nullnull!!!null!!!null

// let qwe = '!!'
// let arr = ['a','a','a']
// arr.join(qwe)
