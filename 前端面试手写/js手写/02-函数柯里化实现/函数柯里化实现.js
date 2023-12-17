function curry(fn) {
    // 参数的长度
    let fnLength = fn.length ?? 0
    // 收集参数
    let args = []
    return function calc(...newArgs) {
        args = [
            ...args,
            ...newArgs
        ]
        // 判断参数的长度
        if(args.length < fnLength) {
            // 长度不够
            return calc
        } else {
            return fn.apply(this, args.slice(0, fnLength))
        }
    }
}

function multiFn(a, b, c) {
    return a * b * c;
}
const multi = curry(multiFn)

const result = multi(1)(2)(3)
console.log(result)

