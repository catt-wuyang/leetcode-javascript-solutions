/**
 * 345.反转字符串的元音字母
 *
 * 给定一个字符串s，反转字符串中的所有元音字母，并返回结果
 * 元音字母有'a'、'e'、'i'、'o'、'u' 可能是大小写字母
 *
 * 示例：
 * 输入：s = 'hello'
 * 输出：'holle'
 */
const reverseVowels = function (s) {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  s = [...s];

  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (!vowels.includes(s[left])) {
      left++;
    }
    if (!vowels.includes(s[right])) {
      right--;
    }
    if (vowels.includes(s[left]) && vowels.includes(s[right])) {
      [s[left], s[right]] = [s[right], s[left]];
      left++;
      right--;
    }
  }
  return s.join("");
};
