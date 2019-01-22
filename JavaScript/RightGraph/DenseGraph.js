// 导入边
var Edge = require('./Edge');
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
        // g初始化为n*n的矩阵，每一个g[i][j]指向一个边的信息,初始化为null;
        for(let i = 0; i < n; i++) {
            this.g.push(new Array(n).fill(null));
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
    addEdge(v, w, weight) {
        if(v < 0 || v > this.n || w < 0 || w > this.n) return;
        this.g[v][w] = new Edge(v, w, weight);
        if(v !== w && !this.directed)
            this.g[w][v] = new Edge(w, v, weight);
        this.m++;
    }
    // 验证图中是否有从v到w的边
    hasEdge(v, w) {
        if(v < 0 || v > this.n || w < 0 || w > this.n) return;
        return Boolean(this.g[v][w]);
    }
    // 显示数据
    // 使用迭代器显示数据
    // 时间复杂度 O(V^2)
    show() {
        var str = "";
        for(let v =0; v < this.n; v++) {
            str+= v+" : ";
            let iterator = new adjIterator(this.g, v);
            for(let l of iterator) {
                str += l.wt() + "\t";
            }
            str+= '\n';
        }
        console.log(str);
    }
    // 以矩阵的形式显示图的信息
    showII() {
        let str = "   ";
        for(let i = 0; i < this.n; i++) {
            str += i + "\t";
        }
        str += "\n";
        for(let i = 0; i < this.n; i++) {
            str += i + ": ";
            for(let j = 0; j < this.n; j++) {
                if(this.g[i][j])
                    str += this.g[i][j].wt() + "\t";
                else
                    str += 0 + "\t";
            }
            str += "\n";
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
        this.index = -1; // 索引从-1开始，因为每次遍历都需要调用一次next()
    }
    [Symbol.iterator]() { return this; }
    // 返回图G中与顶点v相连接的下一个顶点
    next() {
        var end = this.g.length;
        // 从当前index开始向后搜索，直到找到一个g[v][index]为true
        if(this.index < end) {
            this.index++;
            while(this.g[this.v][this.index] === null && this.index < end) {
                this.index++;
            }
            if(this.g[this.v][this.index]) return {done: false, value: this.index};           
        }
        return {done: true, value: undefined};
    }
}