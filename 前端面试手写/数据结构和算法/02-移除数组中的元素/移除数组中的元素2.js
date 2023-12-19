/**
 * @description: 移除数组中的元素
 * @param {*} nums: 数组
 * @param {*} val： 移除的元素
 * @return {*}
 */
function removeElement(nums, val) {
    let slowIndex = 0; // 快指针
    let fastIndex = 0; // 慢指针
    while(fastIndex < nums.length) { // 循环快指针，长度为数组的长度
        if(nums[fastIndex] !== val) { // 过滤掉移除的元素
            nums[slowIndex++] = nums[fastIndex] // 慢指针开始移动
        }
        fastIndex++
    }
    return slowIndex // 返回数组的长度

}

const arr = [1,4,3,2,4,5,6,7,8]
const result = removeElement(arr, 2)
console.log(result, 'result')