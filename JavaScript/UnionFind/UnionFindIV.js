/*
 * 并查集
 * 第四版基于rank树的高度进行优化
 */
module.exports = class UF {
    constructor(count) {
        // rank[i] 表示以i为根的集合所表示树的层数
        this.rank = [];
        // parent[i] 表示第i个元素所指向的父节点
        this.parent = [];
        this.count = count;
        for(let i = 0; i < this.count; i++) {
            this.parent[i] = i;
            this.rank[i] = 1;
        }
    }
    // 查找过程，查找元素p所对应集合的编号
    // O(h)复杂度，h为树的高度
    find(p) {
        // 不断去查询自己的父亲节点，直到到达根节点
        // 根节点的特点：parent[p] === p
        while(p !== this.parent[p]) {
            p = this.parent[p];
        }
        return p;
    }
    // 查找元素p和元素q是否属于一个集合
    // O(h)复杂度，h为树的高度
    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }
    // 合并元素p和元素q所属的集合
    // O(h)复杂度，h为树的高度
    unionElements(p, q) {
        let pRoot = this.find(p);
        let qRoot = this.find(q);
        if(pRoot === qRoot) return;
        // 根据两个元素所在树的元素个数不同判断合并方向
        // 将元素个数少的集合合并到元素个数多的集合上
        if(this.rank[pRoot] < this.rank[qRoot]) {
            this.parent[pRoot] = qRoot;
        } else if(this.rank[qRoot] < this.rank[pRoot]) {
            this.parent[qRoot] = pRoot;
        } else {
            // this.rank[qRoot] = this.rank[pRoot]
            this.parent[pRoot] = qRoot;
            this.rank[qRoot] += 1; // 此时维护rank的值,qRoot对应的树高度加1
        }
    }
}