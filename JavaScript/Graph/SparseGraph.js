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
        this.g = new Array(n);
        for(var i = 0; i < n; i++) {
            this.g[i] = [];
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
    // 显示数据
    // 使用迭代器显示数据
    // O(E)
    show() {
        let str = "";
        for(let v = 0; v < this.n; v++) {
            str+= v+" : ";
            let iterator = new adjIterator(this.g, v);
            for(let l of iterator) {
                str+= l + " ";
            }
            str += '\n';
        }
        console.log(str);
    }
}

// 迭代器，传入一个图和一个顶点,
// 迭代在这个图中共和这个顶点相连的所有顶点
class adjIterator {
    constructor(g, v) {
        this.g = g;
        this.v = v;
        this.index = 0; 
    }
    [Symbol.iterator]() { return this; }
    // 返回图G中与顶点v相连接的下一个顶点
    next() {
        var end = this.g[this.v].length;
        // 判断当前节点是否有连接的边，没有就直接结束索引
        if(end === 0) return {done: true, value:undefined};
        if(this.index < end) {
            return {done: false, value: this.g[this.v][this.index++]};
        }
        return {done: true, value: undefined};
    }
}