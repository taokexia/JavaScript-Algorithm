/*
 * 稀疏图-邻接表
 * 邻接表适合表示稀疏图
 * 邻接矩阵适合表示稠密图
 */
module.exports = class SparseGraph {
    constructor(n, directed) {
        this.n = n; // 节点数
        this.m = 0; // 边数
        this.directed = directed; // 是否为有向图
        // g初始化为n个空的数组，表示每一个g[i]都为空，没有任何边
        this.g = new Array(n).fill([]); 
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
        this.g[v].push(w);
        if(v !== w && !this.directed) {
            this.g[w].push(v);
        }
        this.m++;
    }
    // 验证图中是否有从v到w的边
    hasEdge(v, w) {
        if(v < 0 || v > this.n || w < 0 || w > this.n) return;
        for(var i = 0; i < this.g[v].length; i++) {
            if(this.g[v][i] === w) {
                return true;
            }
        }
        return false;
    }
}