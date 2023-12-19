/**
 * @description: instanceof的实现
 * @param {*} constructor
 * @param {*} instance
 * @return {*}
 */
function _instanceof(instance, Func) {
  // 判断是引用的数据类型, 判断基本数据类型是false
  if (typeof instance !== "object" || instance == null) return false;
  // 获取原型链
  let proto = Object.getPrototypeOf(instance);
  console.log(proto)

  while (proto) {
    // 找到原型
    if(proto == Func.prototype) return true
    // 改变原型链的指向一直往上查
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
console.log("test", _instanceof(null, Array)); // false
console.log("test", _instanceof([], Array)); // true
console.log("test", _instanceof("", Array)); // false
console.log("test", _instanceof({}, Object)); // true
