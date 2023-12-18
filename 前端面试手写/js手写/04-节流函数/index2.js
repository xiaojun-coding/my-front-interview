/**
 * @description: 节流函数
 * @param {*} fn
 * @param {*} wait
 * @return {*}
 */
function throttle(fn, wait) {
    let timer = null
    return function (...args) {
        if(timer) return
        timer = setTimeout(()=> {
          fn(this, args)
        }, wait)
    }
}