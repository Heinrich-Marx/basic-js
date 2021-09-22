import { NotImplementedError } from "../extensions/index.js";

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  //throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here
  let arr = names.slice();
  for (let i = 0; i < arr.length; i++) {
    let arr2 = [];
    let a = arr.indexOf(arr[i]);
    while (a != -1) {
      arr2.push(a);
      a = arr.indexOf(arr[i], a + 1);
    }
    for (let i = 1; i < arr2.length; i++) {
      if (arr2[i]) {
        arr[arr2[i]] = arr[arr2[i]] + "(" + i + ")";
      }
    }
  }
  return arr;
}
