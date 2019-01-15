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