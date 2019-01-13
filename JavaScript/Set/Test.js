// 测试Set
var Set = require('./Set');

var setA = new Set();
setA.add('a');
setA.add('c');
setA.add('b');

var setB = new Set();
setB.add(1);
setB.add(2);
setB.add(3);

var setC = new Set();
setC.add(2);
setC.add(3);
setC.add(4);

setA.print();
setB.print();
setC.print();
console.log(setA.subset(setB)); //false
console.log(setA.subset(setC)); //false