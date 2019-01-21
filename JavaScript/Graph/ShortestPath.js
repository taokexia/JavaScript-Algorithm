/*
 * 无权图的最短路径
 * 使用广度优先遍历实现
 */
module.exports = class ShortestPath {
    // 构造函数，需找无权图graph从s点到其他点的最短路径
    constructor(g, s) {
        this.data = g.g; // 获取图类的数据
        this.s = s; // 起始点
        this.visited = new Array(g.V()).fill(false); // 记录节点是否被访问
        this.from = new Array(g.V()).fill(-1); // 记录路径，from[i]查找路径上i的上一个节点
        this.ord = new Array(g.V()).fill(-1); // 记录路径中节点的次序。
        this.bfs();
    }
    // 无向图最短路径算法，从s开始广度优先遍历整张图
    bfs() {
        let q = [];
        q.push(this.s);
        this.visited[this.s] = true;
        this.ord[this.s] = 0;
        while(q.length > 0) {
            let v = q.shift();
            for(let i = 0;i < this.data[v].length; i++) {
                if(!this.visited[this.data[v][i]]) {
                    q.push(this.data[v][i]);
                    this.visited[this.data[v][i]] = true;
                    this.from[this.data[v][i]] = v;
                    this.ord[this.data[v][i]] = this.ord[v] + 1;
                }
            }
        }
    }
    // 查询从s点到w点是否有路径
    hasPath(w) {
        return this.visited[w];
    }
    // 查询从s点到w点的路径
    path(w) {
        let s = [];
        // 通过from数组逆序查找从s到w的路径，存放在栈s中
        let p = w;
        while(p !== -1) {
            s.push(p);
            p = this.from[p];
        }
        // 返回数组的逆序
        return s.reverse();
    }
    // 打印出从s点到w点的路径
    showPath(w) {
        if(!this.hasPath(w)) return;
        var res = this.path(w);
        var str = "";
        for(let i = 0; i < res.length; i++) {
            str += res[i];
            if(i === res.length-1) {
                str += "\n";
            } else {
                str += " -> ";
            }
        }
        console.log(str);
    }
    // 查看从s点到w点最短路径的长度
    length(w) {
        if(w < 0 || w > this.data.length) return;
        return this.ord[w];
    }
}