/*
 * 实现并查集
 * 第二版本的UnionFind，使用一个数组构建一棵指向父节点的树
 * 形状：
 *          2->2
 *         /|\
 *        / | \
 *       /  |  \
 *      5   3   1
 *     / \
 *    /   \
 *   6     7
 */
module.exports = class UnionFindII {
    constructor(count) {
        this.count = count;
        this.parent = [];
        for(let i = 0; i < count; i++) {
            this.parent[i] = i;
        }
    }
    // 查找过程，查找元素p所对应的集合编号
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
        this.parent[pRoot] = qRoot;
    }
}