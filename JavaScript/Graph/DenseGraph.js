/*
 * 稠密图-邻接矩阵
 * 邻接表适合表示稀疏图
 * 邻接矩阵适合表示稠密图
 */
module.exports = class DenseGraph {
    constructor(n, directed) {
        this.n = n; // 节点数
        this.m = 0; // 边数
        this.directed = directed; // 是否为有向图
        this.g = []; // 图的具体数据
        // g初始化为n*n的布尔矩阵，每一个g[i][j]都为false，表示没有任何边
        for(let i = 0; i < n; i++) {
            g.push(new Array(n).fill(false));
        }
    }
    // 返回节点个数
    V() {
        return this.n;
    }
    // 返回边的个数
    E() {
        return this.m;
    }
    // 向图中添加一个边
    addEdge(v, w) {
        if(v < 0 || v > this.n || w < 0 || w > this.n) return;
        // 验证是否已经存在这条边
        if(this.hasEdge(v, w)) return;
        this.g[v][w] = true;
        if(!this.directed) this.g[w][v] = true;
        this.m++;
    }
    // 验证图中是否有从v到w的边
    hasEdge(v, w) {
        if(v < 0 || v > this.n || w < 0 || w > this.n) return;
        return this.g[v][w];
    }
}
