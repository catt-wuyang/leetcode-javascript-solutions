/**
 * 防抖
 *
 * 延迟执行
 * 立即执行
 */

/**
 * fn 回调、delay 间隔时间、immediate 是否立即执行
 */
const debounce = function (fn, delay, immediate) {
  let timer;
  return () => {
    if (timer) clearTimeout(timer);

    if (immediate) {
      let now = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, delay);
      if (now) {
        fn.call(this);
      }
    } else {
      timer = setTimeout(() => {
        fn.call(this);
      }, delay);
    }
  };
};

/**
 * usage - 鼠标在某区域内数量+1
 */
const content = document.getElementById("content");
let num = 1;
function count() {
  content.innerHTML = num++;
}
content.onmousemove = debounce(count, 500, true);
