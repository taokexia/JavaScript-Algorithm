const Dict = require('../Dict/Dict');
const Queue = require('../Queue/Queue');
/*
 * 定义图的类
 */
var Graph = function (vertices) {
    // 属性
    this.vertexes = []; // 存储顶点
    this.adjList = new Dict(); // 存储边
    this.edgeTo = []; // 用于记录最短路径
};

// 添加节点
Graph.prototype.addVertex = function (v) {
    this.vertexes.push(v);
    this.adjList.set(v, []);
    this.edgeTo[v] = [];
}

// 添加边
Graph.prototype.addEdge = function (v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
}

// 输出图
Graph.prototype.toString = function () {
    var resultStr = "";
    for (var i = 0; i < this.vertexes.length; i++) {
        resultStr += this.vertexes[i] + "->";
        var adj = this.adjList.get(this.vertexes[i]);
        for (var j = 0; j < adj.length; j++) {
            resultStr += adj[j] + " ";
        }
        resultStr += "\n";
    }
    return resultStr;
}

// 深度优先遍历——使用栈来辅助实现
Graph.prototype.dfs = function (start) {
    // 获取节点
    var v = start ? this.vertexes[start]: this.vertexes[0];
    // 节点元素入栈
    var stack = [v];
    // 用数组来储存访问的节点
    var visited = [];
    var i;
    while (stack.length !== 0) {
        var v = stack.pop();
        visited.push(v);
        var edge = this.adjList.get(v);
        for (i = 0; i < edge.length; i++) {
            // 当获取的节点没有访问过并且没有存入栈中，则将其存入栈中
            if (visited.indexOf(edge[i]) === -1 &&
                stack.indexOf(edge[i]) === -1) {
                stack.push(edge[i]);
            }
        }
    }
    // 返回数据
    return visited;
};

// 广度优先遍历——使用队列来辅助实现
Graph.prototype.bfs = function (start) {
    // 获取当前的节点
    var n = start ? this.vertexes[start]: this.vertexes[0];
    // 创建队列
    var queue = new Queue();
    // 将传入的顶点放入队列中
    queue.enqueue(n);
    // 设置数组用于存储广度遍历的节点
    var visited = [];
    var i;
    while (!queue.empty()) {
        // 从队列中取出数据
        var v = queue.dequeue();
        // 添加到访问过的数组中
        visited.push(v);
        // 访问目前该节点能到达的下一个节点
        var edge = this.adjList.get(v);
        for (i = 0; i < edge.length; i++) {
            // 当获取的节点没有访问过并且没有存入栈中，则将其存入栈中，并且保存路径
            if (visited.indexOf(edge[i]) === -1 &&
                queue.has(edge[i]) === -1) {
                // 记录从n索引到i索引需要经过v索引,即记录下该节点对应的索引
                this.edgeTo[n][edge[i]] = v;
                queue.enqueue(edge[i]);
            }
        }
    }
    return visited;
};

// 输出到两个节点间的最短路径
Graph.prototype.pathTo = function (v, w) {
    var i = this.vertexes.indexOf(v);
    if (this.edgeTo[v].length === 0) {
        this.bfs(i);
    }
    var path = [];
    // 循环存取路径，直接找到v节点的索引
    var edges = this.edgeTo[v];
    for (var i = w; i != v; i = edges[i]) {
        path.push(i);
    }
    path.push(v);
    // 反转数组，从w -> v 变成从 v -> w
    path = path.reverse();
    return path;
};

// 拓扑排序:与深度优先搜索类似，不同的是，拓扑排序算法不会立即输出已访问的顶点，而是访问当前顶点邻接表中所有的相邻
// 顶点，直到这个列表穷尽时，才将当前顶点压入栈中。
Graph.prototype.topSort = function () {
    var topSortResult = [];
    var visited = [];
    for (var i = 0; i < this.vertexes.length; i++) {
        visited[i] = false;
    }
    for (var j = 0; j < this.vertexes.length; j++) {
        if (visited[i] !== false) {
            this.topSortHelper(j, visited, topSortResult);
        }
    }

    var ret = [];
    for (var k = 0; k < topSortResult.length; k++) {
        ret.push(this.vertexes[topSortResult[k]]);
    }
    return ret.reverse();
};
// 辅助函数： 通过深度优先遍历。（可以使用栈实现）
Graph.prototype.topSortHelper = function (v, visited, topSortResult) {
    visited[v] = true;
    var n = this.vertexes[v];
    var w;
    for (var i = 0; i < this.adjList.get(n).length; i++) {
        w = this.adjList.get(n)[i];
        w = this.vertexes.indexOf(w);
        if (!visited[w]) {
            this.topSortHelper(w, visited, topSortResult);
        }
    }
    if (topSortResult.indexOf(v) === -1) {
        // 遍历完连接的节点后，再把自身入栈。
        topSortResult.push(v);
    }
};

module.exports = Graph;