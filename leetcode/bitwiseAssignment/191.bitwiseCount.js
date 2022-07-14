/**
 * 191.位运算1的个数
 *
 * 描述：编写一个函数，计算某个二进制位整数中有多少个1
 *
 * 示例：
 * 输入：01011100001011
 * 输出：7
 */

/**
 * 解法一 右移
 *
 * 假设一个整数n = 9 二进制位 1001
 * 判断最末尾是否为 1，是则计算加 1
 * 然后依次右移二进制数，直到数变为 0 结束
 * n & 1 目的就是判断末尾是否为 1
 */
const bitwiseCountRight = function (n) {
  let ret = 0;
  while (n !== 0) {
    if (n & 1) {
      ret++;
    }
    n = n >> 1;
  }
  return ret;
};

/**
 * 解法二 左移
 *
 * 相比解法一 时间复杂度低
 */
const bitwiseCountLeft = function (n) {
  let ret = 0;
  let tmp = 1;
  while (tmp) {
    if (n & tmp) {
      ret++;
    }
    tmp = tmp << 1;
  }
  return ret;
};

/**
 * 解法三 数学定理
 *
 * 一个整数n减1后，再和整数n按二进制与运算，
 * 会使得整数n的二进制最右边的1变成0
 * 如：n = 9 1001
 * n - 1 = 8 1000
 * n & (n - 1) = 1001 & 1000 = 1000
 * 依次减1再&运算，直到整数变为0结束，一共进行了多少次&与运算，
 * 该整数就有多少个1
 *
 */
const bitwiseCountMath = function (n) {
  let ret = 0;
  while (n !== 0) {
    n = n & (n - 1);
    ret++;
  }
  return ret;
};
