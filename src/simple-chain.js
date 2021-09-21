import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  arr: [],
  getLength() {
    if (this.arr.length > 0) {
      return this.arr.length;
    } else return 0;
  },
  addLink(value) {
    value === undefined
      ? this.arr.push("( )")
      : this.arr.push(`( ${value + ""} )`);
    return this;
  },
  removeLink(position) {
    if (
      this.arr[position] == undefined ||
      !Number.isInteger(position) ||
      !parseInt(position)
    ) {
      this.arr.length = 0;
      throw new Error("You can't remove incorrect link!");
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = this.arr.join("~~");
    this.arr.length = 0;
    return str;
  },
};
