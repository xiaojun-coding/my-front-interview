/**
 * @description: 数转列表的实现（树转数组）
 * @param {*} tree
 * @return {*}
 */
function treeToList(tree) {
  // 收集结果
  const result = [];
  // 递归函数
  const fn = (tree) => {
    for (const item of tree) {
      result.push({
        id: item.id,
        name: item.name,
        pid: item.pid,
      });
      // 判断有没有children
      if (item.children && item.children.length > 0) {
        fn(item.children);
      }
    }
  };
  fn(tree);
  return result;
}

const tree = [
  {
    id: 1,
    name: "部门1",
    pid: 0,
    children: [
      {
        id: 2,
        name: "部门2",
        pid: 1,
      },
      {
        id: 3,
        name: "部门3",
        pid: 1,
        children: [
          {
            id: 4,
            name: "部门4",
            pid: 3,
            children: [
              {
                id: 5,
                name: "部门5",
                pid: 4,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: "部门6",
    pid: 0,
  },
];

// 测试
console.log(tree);
const result = treeToList(tree);
console.log(result, "result");
