/**
 * @description: 收集结果集
 * @param {*} n
 * @return {*}
 */
function sum(n) {
  let result = 0;
  while (n) {
    // 拆分数字
    result += (n % 10) ** 2;
    n = Math.floor(n / 10);
  }
  return result;
}

/**
 * @description: 判断是否是快乐数
 * @param {*} n
 * @return {*}
 */
function isHappy(n) {
  // 有重复数字就不是快乐舒
  const set = new Set();
  // 无限循环
  while (n !== 1 && !set.has(n)) {
    set.add(n);
    n = sum(n);
  }
  console.log(n === 1); // 当等于1时返回true
  return n === 1;
}

// const result = isHappy(19); // true
const result = isHappy(22); // false
console.log(result, "result");
