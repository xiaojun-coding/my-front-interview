/**
 * @description: 三数之和
 * @param {*} nums
 * @return {*}
 */
function sumThreeSum(nums) {
  // 先讲数组进行排序
  nums = nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let result = [];
  // 遍历数组
  for (let i = 0; i < nums.length; i++) {
    // 如果有数大于0,结束不符合题意
    if (nums[i] > 0) {
        return result
    };
    if (i > 0 && nums[i] === nums[i - 1]) {
        continue
    }
    left = i + 1;
    /**
     * @description: 
     * @return {*}
     */
    right = nums.length - 1;
    while (left < right) {
      // left = right就不是三数之和了
      let total =  nums[i] + nums[left] + nums[right];
      if (total === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        // 去重
        while (nums[right] === nums[right + 1]) {
          right--;
        }
        while (nums[left] === nums[left - 1]) {
          left++;
        }
      } else if (total < 0) {
        left++; // 左指针向右移动
      } else {
        right--; // 右指针向左移动
      }
    }
  }
  return result;
}
// 测试
nums = [-1, 0, 1, 2, -1, -4];
const result = sumThreeSum(nums);
console.log(result, 'result')
