/*
 * 定义图的类
 */
var Graph = function (vertices) {
    this.vertices = vertices;
    this.edges = 0;
    this.adj = []; // 邻接表
    var i;
    for (i = 0; i < this.vertices.length; i++) {
        this.adj[i] = [];
    }
    this.edgeTo = [];
    for (i = 0; i < this.vertices.length; i++) {
        this.edgeTo[i] = [];
    }
};

// 添加边
Graph.prototype.addEdge = function (v, w) {
    var v_idx = this.vertices.indexOf(v);
    var w_idx = this.vertices.indexOf(w);
    // 这是一个无向图, 要对称
    this.adj[v_idx].push(w_idx);
    this.adj[w_idx].push(v_idx);
    this.edges++;
    return this;
};

// 显示图
Graph.prototype.show = function () {
    var v;
    var node;
    for (var i = 0; i < this.vertices.length; i++) {
        v = this.vertices[i];
        v += ' -> ';
        for (var j = 0; j < this.adj[i].length; j++) {
            v += this.vertices[this.adj[i][j]] + ' ';
        }
        console.log(v);
    }
};

// 深度优先遍历——使用栈来辅助实现
Graph.prototype.dfs = function (start) {
    var n = this.vertices.indexOf(start) || 0;
    var stack = [n];
    var visited = [];
    var ret = [];
    var i;
    while (stack.length !== 0) {
        var v = stack.pop();
        visited.push(v);
        for (i = 0; i < this.adj[v].length; i++) {
            // 当获取的节点没有访问过并且没有存入栈中，则将其存入栈中
            if (visited.indexOf(this.adj[v][i]) === -1 &&
                stack.indexOf(this.adj[v][i]) === -1) {
                stack.push(this.adj[v][i]);
            }
        }
    }
    // 遍历，将获取节点的顺序索引对应节点存入新的数组，用于返回数据
    for (i = 0; i < visited.length; i++) {
        ret.push(this.vertices[visited[i]]);
    }
    return ret;
};

// 广度优先遍历——使用队列来辅助实现
Graph.prototype.bfs = function (start) {
    var n = this.vertices.indexOf(start) || 0;
    var queue = [n];
    var visited = [];
    var ret = [];
    var i;
    while (queue.length !== 0) {
        var v = queue.shift();
        visited.push(v);
        for (i = 0; i < this.adj[v].length; i++) {
            // 当获取的节点没有访问过并且没有存入栈中，则将其存入栈中，并且保存路径
            if (visited.indexOf(this.adj[v][i]) === -1 &&
                queue.indexOf(this.adj[v][i]) === -1) {
                // 记录从n索引到i索引需要经过v索引,即记录下该节点对应的索引
                this.edgeTo[n][this.adj[v][i]] = v;
                queue.push(this.adj[v][i]);
            }
        }
    }
    for (i = 0; i < visited.length; i++) {
        ret.push(this.vertices[visited[i]]);
    }
    return ret;
};

// 输出到两个节点间的最短路径
Graph.prototype.pathTo = function (v, w) {
    var v_idx = this.vertices.indexOf(v);
    var w_idx = this.vertices.indexOf(w);
    if (this.edgeTo[v_idx].length === 0) {
        this.bfs(v);
    }
    var source = v_idx;
    var path = [];
    // 循环存取路径，直接找到v节点的索引
    for (var i = w_idx; i != source; i = this.edgeTo[v_idx][i]) {
        path.push(i);
    }
    path.push(source);
    // 反转数组，从w -> v 变成从 v -> w
    path = path.reverse();
    for (i = 0; i < path.length; i++) {
        path[i] = this.vertices[path[i]];
    }
    return path;
};

// 拓扑排序:与深度优先搜索类似，不同的是，拓扑排序算法不会立即输出已访问的顶点，而是访问当前顶点邻接表中所有的相邻
// 顶点，直到这个列表穷尽时，才将当前顶点压入栈中。
Graph.prototype.topSort = function () {
    var topSortResult = [];
    var visited = [];
    for (var i = 0; i < this.vertices.length; i++) {
        visited[i] = false;
    }
    for (var j = 0; j < this.vertices.length; j++) {
        if (visited[i] !== false) {
            this.topSortHelper(j, visited, topSortResult);
        }
    }

    var ret = [];
    for (var k = 0; k < topSortResult.length; k++) {
        ret.push(this.vertices[topSortResult[k]]);
    }
    return ret.reverse();
};
// 辅助函数： 通过深度优先遍历。（可以使用栈实现）
Graph.prototype.topSortHelper = function (v, visited, topSortResult) {
    visited[v] = true;
    var w;
    for (var i = 0; i < this.adj[v].length; i++) {
        w = this.adj[v][i];
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