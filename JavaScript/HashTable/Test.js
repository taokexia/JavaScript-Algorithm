// 测试哈希算法
var hashFunc = require('./HashFunc');
console.log(hashFunc('abc', 7)); // 4
console.log(hashFunc('cde', 7)); // 4 发生碰撞
console.log(hashFunc('bda', 7));
console.log(hashFunc('abc', 7));
console.log(hashFunc('bda', 7));

// 测试哈希表
var HashTable = require('./HashTable');

var ht = new HashTable();
// 插入数据
ht.put("abc", "1");
ht.put("cba", "2");
ht.put("nba", "3");
ht.put("mba", "4");
ht.put("dba", "5");
// 获取数据
console.log(ht.get("abc")); // 1
ht.put("abc", "2");
console.log(ht.get("abc")); // 2
// 删除数据
console.log(ht.remove("abc")); // 2
console.log(ht.get("abc")); // null
console.log(ht.storage);