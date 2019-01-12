var LinkedList = require('./LinkedList');
var DoubleLinkedList = require('./DoubleLinkedList');

// 测试链表
var list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

// 输出链表
console.log(list.toString());

list.insert(0, 10);
list.insert(2, 20);
list.insert(4, 30);

list.remove(30);
console.log(list.toString());

// 测试双向链表
var dlist = new DoubleLinkedList();

dlist.append(10);
dlist.append(20);
dlist.append(30);

// 输出链表
console.log(dlist.toString());

dlist.insert(0, 10);
dlist.insert(2, 20);
dlist.insert(4, 30);

dlist.remove(30);
// 逆序输出
console.log(dlist.reverseString());