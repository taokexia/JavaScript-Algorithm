// 测试线段树
var SegmentTree = require('./SegmentTree');
var nums = [-2, 0, 3, -5, 2, -1];
var sg = new SegmentTree(nums, (a, b)=> a+b);
console.log(sg.toString());
console.log(sg.query(0, 2));
console.log(sg.query(2, 5));
console.log(sg.query(0, 5));
sg.set(3, 4)
console.log(sg.toString());
console.log(sg.query(0, 5));

console.log("=============================测试线段树II===================================")
var SegmentTreeII = require('./SegmentTreeII');
var nums2 = [-2, 0, 3, -5, 2, -1];
var sgi = new SegmentTreeII(nums2, (a, b)=> a+b);
console.log(sgi.toString());
console.log(sgi.query(0, 2));
console.log(sgi.query(2, 5));
console.log(sgi.query(0, 5));
sgi.set(3, 4)
console.log(sgi.toString());
console.log(sgi.query(0, 5));