/**
 * @description: 函数柯里化分配传入参数
 * @param {*} fn：函数
 * @param {*} arr： 数组
 * @return {*}
 */
function curry (fn, arr = []) {// arr就是我们要收集每次调用时传入的参数
    let len = fn.length; // 函数的长度，就是参数的个数
  
    return function(...args) {
      let newArgs = [...arr, ...args] // 收集每次传入的参数
  
      // 如果传入的参数个数等于我们指定的函数参数个数，就执行指定的真正函数
      if(newArgs.length === len) {
        return fn(...newArgs)
      } else {
        // 递归收集参数
        return curry(fn, newArgs)
      }
    }
  }
   

function multiFn(a, b, c) {
  return a * b * c;
}

var multi = curry(multiFn);
console.log(multi(2)(3)(4));

multi(2)(3)(4);
multi(2, 3, 4);
multi(2)(3, 4);
multi(2, 3)(4);
