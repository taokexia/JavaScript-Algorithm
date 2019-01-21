/* 
 * 求无权图的联通分量
 */
module.exports = class Component {
    constructor(g) {
        // 算法初始化
        this.data = g.g; // 获取图类的数据
        this.visited = new Array(g.V()).fill(false); // 记录dfs过程中节点是否被访问
        this.id = new Array(g.V()).fill(-1); // 每个节点所对应联通分量标记
        this.ccount = 0; // 记录联通分量的个数
        // 求图的联通分量
        for(let i = 0; i < g.V(); i++) {
            if(!this.visited[i]) {
                this.dfs(i);
                this.ccount++;
            }
        }
    }
    // 图的深度优先遍历
    dfs(v) {
        this.visited[v] = true;
        this.id[v] = this.ccount;
        for(let i = 0;i < this.data[v].length; i++) {
            if(!this.visited[this.data[v][i]])
                this.dfs(this.data[v][i]);
        }
    }
    // 返回图联通分量的个数
    count() {
        return this.ccount;
    }
    // 查询v和点w是否联通
    isConnected(v, w) {
        if(v < 0 || v > this.data.length || w < 0 || w > this.data.length) return;
        return this.id[v] === this.id[w];
    }
}