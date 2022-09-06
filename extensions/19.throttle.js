/**
 * 节流
 *
 * 时间戳
 * 定时器
 */

/**
 * 时间戳
 */
const throttle = function (fn, delay) {
  let timer = 0;
  return () => {
    let now = new Date();
    if (now - timer > delay) {
      timer = now;
      fn.call(this);
    }
  };
};

/**
 * 定时器
 */
function throttle(fn, delay) {
  let timer;
  return () => {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.call(this);
      }, delay);
    }
  };
}

/**
 * usage - 滚动事件
 */
window.onscroll = throttle(() => console.log("scrolling"), 500);
