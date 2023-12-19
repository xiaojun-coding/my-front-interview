/**
 * @description: 二分搜索
 * @param {*} nums
 * @param {*} target
 * @return {*}
 */
function binarySearch(nums, target) {
  
    let middle 
    let left = 0
    let right = nums.length - 1  // 左闭右闭
    while(left <= right) { 
        middle = left + ((right - left) >> 1)
        if(nums[middle] > target) { // left === right时， nums在查找范围
            // 去左区间查找 
            right = middle - 1
        } else if(nums[middle] < target) {
            // 去右区间查找
            left = middle + 1
        } else {
            return middle
        }
    }
    // 查找不到返回-1
    return -1

}
const nums = [-1,0,3,5,9,12]
const target = 9
const result = binarySearch(nums, target)
console.log(result)