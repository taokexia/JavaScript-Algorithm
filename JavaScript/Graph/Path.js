/*
 * 路径查询
 */
module.exports = class Path {
    // 构造函数，寻路算法，寻找图graph从s点到其他点的路径
    constructor(g, s) {
        this.data = g.g; // 获取传入图的数据
        this.visited = new Array(g.V()).fill(false); // 记录节点是否被访问过
        if(s > g.V()) s = g.V()-1; // 防止越界
        this.s = s; // 起始点
        this.from = new Array(g.V()).fill(-1); // 记录路径，from[i]表示查找的路径上i的一个节点
        
        // 寻路算法
        this.dfs(s);
    }
    // 图的深度优先遍历
    dfs(v) {
        this.visited[v] = true;
        for(let i = 0; i < this.data[v].length; i++) {
            if(!this.visited[this.data[v][i]]) {
                this.from[this.data[v][i]] = v;
                this.dfs(this.data[v][i]);
            }
        }
    }
    // 查询从s点到w点是否有路径
    hasPath(w) {
        if(w < 0 || w > this.data.length) return false;
        return this.visited[w];
    }
    // 查询从s点到w点的路径
    path(w) {
        if(!this.hasPath(w)) return;
        var s = [];
        // 通过from数组逆向查找到从s到w的路径，存放到栈中
        var p = w;
        while(p !== -1) {
            s.push(p);
            p = this.from[p];
        }
        // 交换数组顺序
        var res = s.reverse();
        return res;
    }
    // 打印出从s到w点的路径
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
}