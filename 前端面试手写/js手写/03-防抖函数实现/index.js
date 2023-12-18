/**
 * @description: 防抖函数的实现
 * 原理： 连续频繁的事件合成一次执行，设置一个时间值，在指定的时间内再只执行一次回调函数
 *        如果在该时间内又触发了该事件，则回调函数执行的事件在此刻重新计算
 * @param {*} fn
 * @param {*} wait
 * @return {*}
 */
function debunce(fn, wait = 100) {
  let timer = null; // 缓存一个定时器的id值
  return function (...args) {
    // 如果已经设置过定时器，清空
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}
