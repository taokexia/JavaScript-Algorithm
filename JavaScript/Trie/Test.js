// 测试字典树
const Trie = require('./Trie');
var t = new Trie();
t.add('happy');
t.add('birthday');
t.add('cat');
t.add('catch');
console.log(t.getSize());
console.log(t.isPrefix('ca'));