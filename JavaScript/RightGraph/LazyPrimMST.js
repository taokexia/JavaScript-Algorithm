var MinHeap = require('./MinHeap');
var Edge = require('./Edge');
// 使用Prim算法求图的最小生成树
module.exports = class LazyPrimMST {
    constructor(g) {
        this.data = g.g; // 传入的图类的数据
        this.pq = new MinHeap(); // 最小堆，算法辅助数据结构
        this.marked = new Array(g.V()).fill(false); // 标记数组，在算法运行过程中记录节点i是否被访问过
        this.mst = []; // 用于记录最小生成树所包含的边
        this.mstWeight; // 最小生成树的权值

        // Lazy Prim
        this.visit(0);
        while(!this.pq.isEmpty()) {
            // 使用最小堆找出已经访问过的边中权值最小的边
            let e = this.pq.extractMin();
            // console.log(this.pq);
            // 如果这条边的两端都已经被访问过，则扔掉这条边
            if(this.marked[e.v()] === true && this.marked[e.w()] === true)
                continue;
            // 否则，这条边应该存在在最小生成树中
            this.mst.push(e);
            // 访问和这条边连接的还没被访问过的节点
            if(!this.marked[e.v()]) {
                this.visit(e.v());
            } else {
                this.visit(e.w());
            }
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
            if(!this.marked[e.other(v)])
                this.pq.insert(e);
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