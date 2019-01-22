var IndexMinHeap = require('./IndexMinHeap');
var Edge = require('./Edge');
// 使用优化的Prim算法求图的最小生成树
module.exports = class LazyPrimMST {
    constructor(g) {
        this.data = g.g; // 传入的图类的数据
        this.ipq = new IndexMinHeap(); // 最小堆，算法辅助数据结构
        this.edgeTo = new Array(g.V()).fill(null); //访问的点所对应的边，算法辅助数据结构
        this.marked = new Array(g.V()).fill(false); // 标记数组，在算法运行过程中记录节点i是否被访问过
        this.mst = []; // 用于记录最小生成树所包含的边
        this.mstWeight; // 最小生成树的权值

        // Lazy Prim
        this.visit(0);
        while(!this.ipq.isEmpty()) {
            // 使用最小堆找出已经访问过的边中权值最小的边
            // 最小索引堆中存储的点是索引，通过点的索引找到相对应的边
            let v = this.ipq.extractMinIndex();
            // console.log(this.ipq);
            this.mst.push(this.edgeTo[v]);
            this.visit(v);
        }
        // 计算最小生成树的权值
        this.mstWeight = this.mst[0].wt();
        for(let i = 1; i < this.mst.length; i++) {
            this.mstWeight += this.mst[i].wt();
        }
    }
    // 访问节点
    visit(v) {
        if(this.marked[v]) return;
        this.marked[v] = true;
        // 将和节点v相连的所有为访问节点的边放入最小堆中
        for(let i = 0; i < this.data[v].length; i++) {
            let e = this.data[v][i];
            let w = e.other(v);
            if(!this.marked[w])
                // 如果从没有考虑过这个端点，直接将这个端点和与之相连接的边加入索引堆
                if(!this.edgeTo[w]) {
                    this.edgeTo[w] = e;
                    this.ipq.insert(w, e.wt());
                }
                // 如果曾经考虑过这个端点，但现在的边比之前的更短，则进行替换
                else if(e.wt() < this.edgeTo[w].wt()) {
                    this.edgeTo[w] = e;
                    this.ipq.change(w, e.wt());
                }
        }
    }
    // 返回最小生成树的所有边
    mstEdges() {
        return this.mst;
    }
    // 返回最小生成树的权值
    result() {
        return this.mstWeight;
    }
}