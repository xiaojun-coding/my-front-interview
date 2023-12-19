/**
 * @description: 计算有序数组的平方
 * @param {*} nums：有序数组
 * @return {*}
 */
function sortedSquares(nums) {
    let len = nums.length, // 数组的长度
        left = 0, // 左指针
        result = new Array(len).fill(0) // 创建一个为数组长度的数组
        right = len - 1 // 右指针
        k = len - 1 // 指向最后一个元素
    while(left <= right) {
        if(nums[left] * nums[left] < nums[right] * nums[right]) {
            result[k--] = nums[right] * nums[right] 
            right--
        } else {
            result[k--] = nums[left] * nums[left]
            left++
        }
        
    }
    return result

}

const arr = [-5, -2, -1 , 0, 3, 4, 6]
const result = sortedSquares(arr)
console.log(result, 'result')