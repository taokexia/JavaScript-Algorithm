var MinHeap = require('./MinHeap');
var UF = require('./UnionFindV');
var Edge = require('./Edge');
// Kruskal算法
// 使用Union Find快速判断环
// 时间复杂度O(ElogE)
module.exports = class KruskalMST {
    constructor(g) {
        this.data = g.g;
        this.mst = []; // 最小生成树所包含所有的边
        this.mstWeight; // 最小生成树的权值
        // 将图中所有的边放到一个最小堆中
        this.pq = new MinHeap();
        for(let i = 0;i < g.V(); i++) {
            for(let j = 0;j < this.data[i].length; j++) {
                let e = this.data[i][j];
                if(e.v() < e.w()) {
                    this.pq.insert(e);
                }
            }
        }
        // 创建一个并查集，来查看已经访问节点的联通情况
        this.uf = new UF(g.V());
        while(!this.pq.isEmpty() && this.mst.length < g.V()-1) {
            // 从最小堆中依次从小到大取出所有的边
            let e = this.pq.extractMin();
            // 如果该边的两个端点是联通的，说明加入这条边将产生环，扔掉这条边
            if(this.uf.isConnected(e.v(), e.w()))
                continue;
            // 否则，将这条边添加进最小生成树，同时标记边两个端点联通
            this.mst.push(e);
            this.uf.unionElements(e.v(), e.w());
        }

        // 计算最小生成树的权值
        this.mstWeight = this.mst[0].wt();
        for(let i = 1; i < this.mst.length; i++) {
            this.mstWeight += this.mst[i].wt();
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
