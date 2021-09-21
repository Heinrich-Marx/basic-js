import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  arr: [],
  getLength() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (this.arr.length > 0) {
      return this.arr.length;
    } else return 0;
  },
  addLink(value) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    value === undefined
      ? this.arr.push("( )")
      : this.arr.push(`( ${value + ""} )`);
    return this;
  },
  removeLink(position) {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    if (this.arr[position] == undefined) {
      this.arr.length = 0;
      throw new NotImplementedError("You can't remove incorrect link!");
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    this.arr.reverse();
    return this;
  },
  finishChain() {
    // throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
    let str = this.arr.join("~~");
    this.arr.length = 0;
    return str;
  },
};

// let chains = {
//   arr: [],
//   getLength() {
//     // throw new NotImplementedError("Not implemented");
//     // remove line with error and write your code here
//     if (this.arr.length > 0) {
//       return this.arr.length;
//     } else return 0;
//   },
//   addLink(value) {
//     // throw new NotImplementedError("Not implemented");
//     // remove line with error and write your code here
//     value === undefined
//       ? this.arr.push("( )")
//       : this.arr.push(`( ${value + ""} )`);
//     return this;
//   },
//   removeLink(position) {
//     // throw new NotImplementedError("Not implemented");
//     // remove line with error and write your code here
//     if (this.arr[position] == undefined) {
//       throw new NotImplementedError("You can't remove incorrect link!");
//     } else {
//       this.arr.splice(position - 1, 1);
//       return this;
//     }
//   },
//   reverseChain() {
//     // throw new NotImplementedError("Not implemented");
//     // remove line with error and write your code here
//     this.arr.reverse();
//     return this;
//   },
//   finishChain() {
//     // throw new NotImplementedError("Not implemented");
//     // remove line with error and write your code here
//     let str = this.arr.join("~~");
//     return str;
//   },
// };

// chains
//   .addLink("GHI")
//   .addLink(null)
//   .reverseChain()
//   .addLink(333)
//   .reverseChain()
//   .reverseChain()
//   .addLink(0)
//   .reverseChain()
//   .reverseChain()
//   .addLink("GHI")
//   .finishChain();
// // chains.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain()
// // chains
// //   .addLink(function () {})
// //   .addLink("2nd")
// //   .addLink("3rd")
// //   .removeLink(2)
// //   .reverseChain()
// //   .finishChain();

// chains
//   .reverseChain()
//   .reverseChain()
//   .reverseChain()
//   .addLink(NaN)
//   .reverseChain()
//   .addLink(null)
//   .addLink(1.233)
//   .addLink(true)
//   .addLink(false)
//   .removeLink(3)
//   .addLink(1.233)
//   .finishChain();
