/**
 * 455.分饼干
 *
 * 描述：现有若干个小孩，数量为 g 个，元素表示每个小孩吃多少块饼干才能满足，
 * 若干块饼干，数量为 s，元素表示饼干的尺寸大小
 * 分饼干的目标是，在现有饼干的情况下尽可能多的满足孩子吃饼干的需求，
 * 返回饼干能满足孩子需求数量的最大值
 *
 * 示例：
 * 输入：g = [1,2,3] s = [1,1]
 * 输出：1
 * 因为饼干的尺寸都是 1 第一块饼干可以满足第一个孩子，
 * 仅剩下的第二块饼干都无法满足第二、第三个孩子，所以最多仅能满足一个孩子的需求
 *
 * 输入：g = [1,2] s = [1,2,3]
 * 输出：2
 * 目前有三块饼干，二个孩子，对应前两块饼干分给这两个孩子，
 * 分饼干的过程中，没有浪费饼干尺寸，同时也满足了孩子的需求
 * 算是一个最优解，最多满足两个孩子的需求
 */

/**
 * 贪心算法
 *
 * g = [1,2,3], s = [4,2,1]
 * 设最大满足孩子需求的数量children=0，通过逻辑运算，最后返回这个值
 * 先找到 g s 的最小长度做数组遍历，因为孩子和饼干是一一对应的关系
 * 先找孩子需求的最小值 1，再在 s 里找可以满足孩子需求的最小值 1
 * 找到孩子饼干的对应值后，把饼干分给孩子，从 g s 中分别去除掉已经分出去的饼干和满足需求的孩子
 * 满足需求的孩子数量+1
 * 遍历执行后，最终返回所有已满足需求的孩子的最大值
 */
const distributeCookies = function (g, s) {
  let children = 0;
  let len = Math.min(g.length, s.length);

  for (let i = 0; i < len; i++) {
    let gMin = Math.min(...g);
    let sMin = s.sort((a, b) => a - b).find((ele) => ele >= gMin);
    if (sMin >= gMin) {
      g.splice(
        g.findIndex((ele) => ele === gMin),
        1
      );
      s.splice(
        s.findIndex((ele) => ele === sMin),
        1
      );
      children += 1;
    }
  }
  return children;
};

/**
 * 贪心算法
 *
 * 贪心算法，找最优解的解法思路不固定，可以理解贪心算法是在解决一个问题，目标是找到所有答案中最优的那个；
 * 另一角度看，找最优解的过程中，也有若干种编程的思路和写法，
 * 算法优化则是在这个过程中，不断搜寻复杂度尽可能小的解法，突破能力范围找到最优解
 */
const distributeCookiesBetter = function (g, s) {
  g = g.sort((a, b) => a - b);
  s = s.sort((a, b) => a - b);

  let ret = 0;
  let sIndex = s.length - 1;

  for (let i = g.length - 1; i >= 0; i--) {
    if (sIndex >= 0 && s[sIndex] >= g[i]) {
      ret++;
      sIndex--;
    }
  }
  return ret;
};
