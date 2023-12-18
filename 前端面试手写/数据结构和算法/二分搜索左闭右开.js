/**
 * @description: 二分搜索（左闭右开）
 * @param {*} nums
 * @param {*} target
 * @return {*}
 */
function binarySearch(nums, target) {
    let left = 0;
    let middle;
    let right = nums.length;
    while(left < right) {
        middle = left + ((right - left) >> 1)
        if(nums[middle] > target) {
            right = middle
        } else if(nums[middle] < target) {
            left = middle + 1
        } else {
            return middle
        }
    }
    return -1
}

const nums = [-1,0,3,5,9,12]
const target = 0
const result = binarySearch(nums, target)
console.log(result)