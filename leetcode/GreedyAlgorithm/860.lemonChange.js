/**
 * 860.柠檬水找零钱
 *
 * 描述：每杯柠檬水5元，顾客排队来买柠檬水，可能拿5元、10元、20元付钱
 * 假设手中无任何零钱的基础上，在卖柠檬水的过程中，是否可以正确找零
 *
 * 示例：
 * 输入：[5,5,5,10,20]
 * 输出：true
 *
 * 输入：[5,5,10,10,20]
 * 输出：false
 */

/**
 * 暴力解法 - 推测每种找零的方式
 */
const tools = {
  removeElement: function (nums, element) {
    nums.splice(
      nums.findIndex((_) => _ === element),
      1
    );
  },
  checkElement: function (nums, element, count) {
    let n = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === element) {
        n++;
      }
    }
    if (n >= count) return true;
    return false;
  },
};

const lemonChange = function (bills) {
  // 第一位顾客必须是5元，否则直接无法找零
  if (bills[0] !== 5) return false;

  let hands = [];
  for (let i = 0; i < bills.length; i++) {
    // 如果顾客付5元，不用找零，直接放到手里
    if (bills[i] === 5) {
      hands.push(5);
    }

    // 如果顾客付10元，看手里是否有5元，有则找零，没有结果 false
    // 找完零放手里10元
    if (bills[i] === 10) {
      if (hands.includes(5)) {
        tools.removeElement(hands, 5);
        hands.push(10);
      } else {
        return false;
      }
    }

    // 如果顾客付20元，看手里是否有10元+5元、或3个5元，有则找零，没有则结果 false
    // 找完零放手里20元
    if (bills[i] === 20) {
      if (hands.includes(5) && hands.includes(10)) {
        tools.removeElement(hands, 5);
        tools.removeElement(hands, 10);
        hands.push(20);
      } else if (tools.checkElement(hands, 5, 3)) {
        tools.removeElement(hands, 5);
        tools.removeElement(hands, 5);
        tools.removeElement(hands, 5);
        hands.push(20);
      } else {
        return false;
      }
    }
  }
  return true;
};

/**
 * 暴力解法优化 - 上面利用数组存储手里的钱想复杂了，
 * 完全可以用数字加减计算，省掉数组增删改查的操作
 */
const lemonChangeBetter = function (bills) {
  let fiveMoney = 0;
  let tenMoney = 0;

  for (let i = 0; i < bills.length; i++) {
    let bill = bills[i];
    if (bill == 5) {
      fiveMoney += 1;
    } else if (bill === 10) {
      if (fiveMoney > 0) {
        fiveMoney -= 1;
        tenMoney += 1;
      } else {
        return false;
      }
    } else {
      if (tenMoney > 0 && fiveMoney > 0) {
        fiveMoney -= 1;
        tenMoney -= 1;
      } else if (fiveMoney >= 3) {
        fiveMoney -= 3;
      } else {
        return false;
      }
    }
  }

  return true;
};
