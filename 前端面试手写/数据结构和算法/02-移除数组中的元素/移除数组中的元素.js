/**
 * @description: 移除数组中的元素
 * @param {*} nums： 数组
 * @param {*} val：移除的元素
 * @return {*}
 */
function removeElement(nums, val) {
    let k = 0;
    for(let i=0; i< nums.length; i++) {
        if(nums[i] !== val) {
            nums[k++] = nums[i]
        }
    }
    return k

}
const arr = [1,4,3,2,4,5,6,7,8]
const result = removeElement(arr, 2)
console.log(result, 'result')