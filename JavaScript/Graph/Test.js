// 测试图
var Graph = require('./Graph');

 // 测试代码
 var graph = new Graph();
 // 添加顶点
 var myVertexes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
 for (var i = 0; i < myVertexes.length; i++) {
     graph.addVertex(myVertexes[i]);
 }
 // 添加边
 graph.addEdge('A', 'B');
 graph.addEdge('A', 'C');
 graph.addEdge('A', 'D');
 graph.addEdge('C', 'D');
 graph.addEdge('C', 'G');
 graph.addEdge('D', 'G');
 graph.addEdge('D', 'H');
 graph.addEdge('B', 'E');
 graph.addEdge('B', 'F');
 graph.addEdge('E', 'I');
 // 打印结果
 console.log(graph.toString());

 // 广度优先遍历
 console.log(graph.bfs(0)); // [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' ]
 // 深度优先遍历
 console.log(graph.dfs(0)); // [ 'A', 'D', 'H', 'G', 'C', 'B', 'F', 'E', 'I' ]
 // 最短路径
 console.log(graph.pathTo("E", "A")); // [ 'E', 'B', 'A' ]
 console.log(graph.pathTo("F", "G")); // [ 'F', 'B', 'A', 'C', 'G' ]

 console.log(graph.topSort()); // [ 'A', 'C', 'D', 'H', 'G', 'B', 'F', 'E', 'I' ]

 console.log('==============================测试稠密图==========================================');
 var DenseGraph = require('./DenseGraph');
 var N = 20;
 var M = 100;
var dgraph = new DenseGraph(N, false);
for(let i = 0; i < M; i++) {
    let a = Math.floor(Math.random()*N);
    let b = Math.floor(Math.random()*N);
    dgraph.addEdge(a, b);
}
dgraph.show();
dgraph.showII();

console.log('==============================测试稀疏图==========================================');
var SparseGraph = require('./SparseGraph');
var N = 20;
var M = 100;
var sgraph = new SparseGraph(N, false);
for(let i = 0; i < M; i++) {
   let a = Math.floor(Math.random()*N);
   let b = Math.floor(Math.random()*N);
   sgraph.addEdge(a, b);
}
sgraph.show();

console.log('==============================测试联通分量==========================================');
var Component = require('./Components');
var cgraph = new SparseGraph(9, false);
cgraph.addEdge(7, 8);
cgraph.addEdge(0, 1);
cgraph.addEdge(0, 2);
cgraph.addEdge(0, 5);
cgraph.addEdge(0, 6);
cgraph.addEdge(3, 4);
cgraph.addEdge(3, 5);
cgraph.addEdge(4, 5);
cgraph.addEdge(4, 6);
var c = new Component(cgraph);
console.log("联通分量为: "+ c.count());

console.log('==============================测试寻路算法==========================================');
var Path = require('./Path');
var p = new Path(cgraph, 0);
p.showPath(6);