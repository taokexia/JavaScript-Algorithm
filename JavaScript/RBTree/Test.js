// 测试红黑树
var RBTree = require('./RBTree');
var rbt = new RBTree();

rbt.add("apple", 2);
rbt.add("down", 3);
rbt.add("quick", 4);
rbt.add("where", 5);
rbt.add("count", 6);

console.log(rbt.getSize());
console.log(rbt.get("count"));
console.log(rbt.get('quick'));