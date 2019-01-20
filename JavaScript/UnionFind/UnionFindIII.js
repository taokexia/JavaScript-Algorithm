/*
 * 并查集
 * 第三版基于size进行优化
 */
module.exports = class UF {
    constructor(count) {
        this.count = count;
        this.parent = [];
        this.size = [];
        for(let i = 0; i < this.count; i++) {
            this.parent[i] = i;
            this.size[i] = 1;
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
        // 将元素个数少的合并到元素个数多的集合上
        if(this.size[pRoot] < this.size[qRoot]) {
            this.parent[pRoot] = qRoot;
            this.size[qRoot] += this.size[qRoot];
        } else {
            this.parent[qRoot] = pRoot;
            this.size[pRoot] += this.size[qRoot];
        }
    }
}

