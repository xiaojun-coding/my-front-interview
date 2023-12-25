/**
 * @description: 有效字母异位词
 * @param {*} s
 * @param {*} t
 * @return {*}
 */
function isAnagram (s, t) {
  // s和t的字符长度不相等,返回false
  if(s.length !== t.length) return false
  // 创建map来报错
  count_map = new Map()

  // 遍历s
  for(const item of s) {
    count_map.set(item, (count_map.get(item) || 0) + 1) // a=>1, b=>2
  }
  // 遍历t
  for(const item of t) {
    // 如果t中的元素在map中找不到，返回false
    if(!count_map.get(item)) return false
    count_map.set(item, count_map.get(item) - 1)
  }
  return true
}
const s = 'cbacbaabcdefg'
const t = 'abcabcabcfdeg'
const result = isAnagram(s, t)
console.log(result, 'result')