/*
 * 并查集的实现
 * 并查集的本质是一种树形结构
 */
module.exports = class UnionFind{
    constructor(n) {
        this.data = [];
        this.count = n;
        // 初始化，每一个id[i]指向自己，没有合并的元素
        for(let i = 0; i < n; i++) {
            this.data[i] = i;
        }
    }
    // 查找过程，查找元素p所对应的集合编号
    find(p) {
        if(p < 0) p = 0;
        if(p > this.count-1) p = this.count-1;
        return this.data[p];
    }
    // 查看元素p和元素q是否所属一个集合
    // O(1)复杂度
    isConnected(p, q) {
        return this.find(p) === this.find(q);
    }
    // 合并元素p和q所属的集合
    // O(n) 复杂度
    unionElements(p, q) {
        let pID = this.find(p);
        let qID = this.find(q);
        if(pID === qID) return;
        // 合并过程需要遍历一遍所有元素，将两个元素的所属集合编号合并
        for(let i = 0; i < this.count; i++) {
            if(this.data[i] === pID)
                this.data[i] = qID;
        }
    }

}