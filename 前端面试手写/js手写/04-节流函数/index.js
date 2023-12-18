/**
 * @description: 节流函数（时间戳方式）
 * @param {*} fn
 * @param {*} wait
 * @return {*}
 */
function throttle (fn, wait) {
    let lastTime = 0
    return function (...args) {
        let nowTime = +new Date()
        if(nowTime - lastTime > wait) {
            lastTime = nowTime
            fn.apply(this, args)
        }
    }
}