import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(value = true) {
    this.value = value;
  }
  encrypt(str, str2) {
    if (str && str2) {
      let newStr = "";
      str = str.toUpperCase();
      let newstr1 = str;
      str = str.replace(/\s/g, "");
      str2 = str2.toUpperCase();
      let str3 = str2;
      while (str2.length < str.length) {
        str2 = str2 + str3;
      }
      for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
          let a = str[i].charCodeAt() + str2[i].charCodeAt();
          if (+a >= 156) {
            a = +a - 91;
          } else {
            a = +a - 65;
          }
          newStr += String.fromCharCode(+a);
        } else {
          newStr += str[i];
        }
      }
      for (let i = 0; i < newstr1.length; i++) {
        if (newstr1[i] == " ") {
          newStr = newStr.substring(0, i) + " " + newStr.substring(i);
        }
      }
      return this.value ? newStr : newStr.split("").reverse().join("");
    }
    throw new Error("Incorrect arguments!");
  }
  decrypt(str, str2) {
    if (str && str2) {
      let newStr = "";
      str = str.toUpperCase();
      let newstr1 = str;
      str = str.replace(/\s/g, "");
      str2 = str2.toUpperCase();
      let str3 = str2;
      while (str2.length < str.length) {
        str2 = str2 + str3;
      }
      for (let i = 0; i < str.length; i++) {
        if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
          let a = str[i].charCodeAt() - str2[i].charCodeAt();
          a >= 0 ? "" : (a += 26);
          newStr += String.fromCharCode(+a + 65);
        } else {
          newStr += str[i];
        }
      }
      for (let i = 0; i < newstr1.length; i++) {
        if (newstr1[i] == " ") {
          newStr = newStr.substring(0, i) + " " + newStr.substring(i);
        }
      }
      return this.value ? newStr : newStr.split("").reverse().join("");
    }
    throw new Error("Incorrect arguments!");
  }
}
// class VigenereCipheringMachine {
//   constructor(bool) {
//     this.bool = bool;
//   }

//   encrypt(text, key) {
//     if (text && key) {
//       let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//       key = key.repeat(Math.ceil(text.length / key.length)).toUpperCase();
//       text = text.toUpperCase().split("");
//       let count = 0;
//       let str = "";
//       let vig = 0;

//       for (let i of text) {
//         if (alphabet.includes(i)) {
//           vig = alphabet.indexOf(i) + alphabet.indexOf(key[count]);
//           str += vig > 25 ? alphabet[vig - 26] : alphabet[vig];
//           count += 1;
//         } else {
//           str += i;
//         }
//       }
//       return this.bool === false ? str.split("").reverse().join("") : str;
//     }
//     throw new Error();
//   }

//   decrypt(text, key) {
//     if (text && key) {
//       let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
//       key = key.repeat(Math.ceil(text.length / key.length)).toUpperCase();
//       text = text.toUpperCase().split("");
//       let count = 0;
//       let str = "";

//       for (let i of text) {
//         if (alphabet.includes(i)) {
//           let ind = alphabet.indexOf(i);
//           let indk = alphabet.indexOf(key[count]);
//           str += ind >= indk ? alphabet[ind - indk] : alphabet[ind + 26 - indk];
//           count++;
//         } else {
//           str += i;
//         }
//       }
//       return this.bool === false ? str.split("").reverse().join("") : str;
//     }
//     throw new Error();
//   }
// }
