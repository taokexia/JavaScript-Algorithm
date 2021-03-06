console.log("======================================测试稠密图====================================");
var DenseGraph = require('./DenseGraph');
var dg = new DenseGraph(8, false);
dg.addEdge(4, 5, 0.35);
dg.addEdge(4, 7, 0.37);
dg.addEdge(5, 7, 0.28);
dg.addEdge(0, 7, 0.16);
dg.addEdge(1, 5, 0.32);
dg.addEdge(0, 4, 0.38);
dg.addEdge(2, 3, 0.17);
dg.addEdge(1, 7, 0.19);
dg.addEdge(0, 2, 0.26);
dg.addEdge(1, 2, 0.36);
dg.addEdge(1, 3, 0.29);
dg.addEdge(2, 7, 0.34);
dg.addEdge(6, 2, 0.40);
dg.addEdge(3, 6, 0.52);
dg.addEdge(6, 0, 0.58);
dg.addEdge(6, 4, 0.93);
dg.showII();

console.log("======================================测试稀疏图====================================");
var SparseGraph = require('./SparseGraph');
var sg = new SparseGraph(8, false);
sg.addEdge(4, 5, 0.35);
sg.addEdge(4, 7, 0.37);
sg.addEdge(5, 7, 0.28);
sg.addEdge(0, 7, 0.16);
sg.addEdge(1, 5, 0.32);
sg.addEdge(0, 4, 0.38);
sg.addEdge(2, 3, 0.17);
sg.addEdge(1, 7, 0.19);
sg.addEdge(0, 2, 0.26);
sg.addEdge(1, 2, 0.36);
sg.addEdge(1, 3, 0.29);
sg.addEdge(2, 7, 0.34);
sg.addEdge(6, 2, 0.40);
sg.addEdge(3, 6, 0.52);
sg.addEdge(6, 0, 0.58);
sg.addEdge(6, 4, 0.93);
sg.show();

console.log("======================================测试最小生成树====================================");
console.time("LazyPrimMST");
var LazyPrimMST  = require('./LazyPrimMST');
var lpm = new LazyPrimMST(sg);
var mst = lpm.mstEdges();
var str = "";
for(let i = 0; i < mst.length; i++) {
    str += mst[i].toString();
}
console.log(str);
console.log("The MST weight is "+ lpm.result());
console.timeEnd("LazyPrimMST");

console.log("======================================测试优化后的最小生成树=============================");
console.time("LazyPrimMSTII");
var LazyPrimMSTII = require('./LazyPrimMSTII');
var lpm2 = new LazyPrimMSTII(sg);
var mst = lpm2.mstEdges();
var str = "";
for(let i = 0; i < mst.length; i++) {
    str += mst[i].toString();
}
console.log(str);
console.log("The MST weight is "+ lpm2.result());
console.timeEnd("LazyPrimMSTII");

console.log("======================================测试Kruskal算法=============================");
console.time("Kruskal");
var KruskalMST = require('./KruskalMST');
var km = new KruskalMST(sg);
var mst = km.mstEdges();
var str = "";
for(let i = 0; i < mst.length; i++) {
    str += mst[i].toString();
}
console.log(str);
console.log("The MST weight is "+ km.result());
console.timeEnd("Kruskal");