/**
 * @description: 实现数组扁平化(递归实现)
 * @param {*} array
 * @return {*}
 */
function flatten(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    // 如果是一个数组的话, 递归展开
    if (Array.isArray(array[i])) {
      result = result.concat(flatten(array[i]));
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
// 测试
const arr = [1, [2, 3, [4, [5]]], 6, 7, [8, [9]]];
const result = flatten(arr);
console.log(result, "result");


/**
 * @description: 数组扁平化（reduce实现）
 * @param {*} arr
 * @return {*}
 */
function flatten1(arr) {
    return arr.reduce((prev, next)=> {
        return prev.concat(Array.isArray(next) ? flatten(next): next)
    }, [])
}
const arr1 = [1, [2, 3, [4, [5]]], 6, 7, [8, [9]]];
const result1 = flatten1(arr);
console.log(result, "result1");
