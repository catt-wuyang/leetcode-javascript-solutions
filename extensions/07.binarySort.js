/**
 * 二分排序
 */

/**
 * 实现的功能是，在给定字符串前面拼接特定的值，总长度是length
 * 输入：str='hello' length=10 ch='0'
 * 输出：'00000hello'
 * 缺点是效率低，尤其是拼接字符串时
 */
const leftPad = function (str, length, ch) {
  let len = length - str.length + 1;
  return Array(len).join(ch) + str;
};

console.log(leftPad("hello", 10, "0"));

/**
 * 二分思想实现
 */
const leftPadBetter = function (str, length, ch) {
  let len = length - str.length;
  let total = "";

  while (true) {
    // if(len%2 === 1)
    if (len & 1) {
      total += ch;
    }
    if (len === 1) {
      return total + str;
    }
    ch += ch;
    len = len >> 1;
    // len = parseInt(len / 2);
  }
};

console.log(leftPadBetter("hello", 10, "0"));

/**
 * 网上的 leftpad 版本
 */
const leftPadNet = function (str, len, ch) {
  if (!ch && ch !== 0) ch = ""; // ch 设置默认值

  let i = 0;
  len = len - str.length; // 需要补齐的长度 10-5=5
  while (i < len) {
    // i = 0,1,2,3,4
    str += ch;
    i++;
  }
  return str;
};

console.log(leftPadNet("hello", 10, "0"));

/**
 * pressure test
 */
console.time("leftpad");
for (let i = 0; i < 10000; i++) {
  leftPad("hello", 100000, "0");
}
console.timeEnd("leftpad");

console.time("leftpadBetter");
for (let i = 0; i < 10000; i++) {
  leftPad("hello", 100000, "0");
}
console.timeEnd("leftpadBetter");

console.time("leftpadNet");
for (let i = 0; i < 10000; i++) {
  leftPadNet("hello", 100000, "0");
}
console.timeEnd("leftpadNet");
