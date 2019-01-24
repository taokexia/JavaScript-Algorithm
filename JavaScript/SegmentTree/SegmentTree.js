// 线段树
module.exports =  class SegmentTree {
    constructor(data, merge) {
        this.data = data;
        this.tree = [];
        // 指定节点的合并业务
        this.merge = merge;
        this.buildSegmentTree(0, 0, data.length-1);
    }
    // 在treeIndex的位置创建表示区间[l...r]的线段树
    buildSegmentTree(treeIndex, l, r) {
        if(l === r) {
            this.tree[treeIndex] = this.data[l];
            return;
        }
        let leftTreeIndex = this.leftChild(treeIndex);
        let rightTreeIndex = this.rightChild(treeIndex);

        let mid = l + Math.floor((r - l)/2);
        this.buildSegmentTree(leftTreeIndex, l, mid);
        this.buildSegmentTree(rightTreeIndex, mid+1, r);
        this.tree[treeIndex] = this.merge(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
    }
    // 返回区间[queryL, queryR]的值
    query(queryL, queryR) {
        if(queryL < 0 || queryL >= this.data.length || queryR < 0 || queryR >= this.data.length || queryL > queryR)
            return;
        return this.__query(0, 0, this.data.length-1, queryL, queryR);
    }
    // 在以treeIndex为根的线段树中[l...r]的范围里，搜索区间[queryL, queryR]的值
    __query(treeIndex, l, r, queryL, queryR) {
        // 节点左边界和右边界都与想要查找的重合
        if(l === queryL && r === queryR)
            return this.tree[treeIndex];
        let mid = l + Math.floor((r-l)/2);

        // 以treeIndex的节点为[l...mid]和[mid+1...r]两部分
        let leftTreeIndex = this.leftChild(treeIndex);
        let rightTreeIndex = this.rightChild(treeIndex);
        // 用户关注的区间和左孩子一点关系没有
        if(queryL >= mid+1) {
            // 去右子树查找
            return this.__query(rightTreeIndex, mid+1, r, queryL, queryR);
        }
        else if(queryR <= mid) {
            // 用户关注区间和右边没有关系
            return this.__query(leftTreeIndex, l, mid, queryL, queryR);
        }
        // 一部分左，一部分右 queryL R 被一份为二
        let leftResult = this.__query(leftTreeIndex, l, mid, queryL, mid);
        let rightResult = this.__query(rightTreeIndex, mid+1, r, mid+1, queryR);
        return this.merge(leftResult, rightResult);
    }
    // 遍历打印树中节点中值信息
    toString() {
        let res = "[";
        for(let i = 0;i < this.tree.length;i++) {
            if(this.tree[i] !== undefined)
                res += this.tree[i];
            else
                res += "null";
            
            if(i != this.tree.length-1) {
                res += ", ";
            }
        }
        res += "]";
        return res;
    }
    // 获得线段树的长度
    getSize() {
        return this.data.length;
    }
    // 获得索引所对应的值
    get(index) {
        return this.data[index];
    }
    // 线段树的更新操作
    // 将index位置的值，更新为e
    set(index, e) {
        this.data[index] = e;
        this.__set(0, 0, this.data.length-1, index, e);
    }
    // 在以treeIndex为根的线段树中更新index的值为e
    __set(treeIndex, l, r, index, e) {
        if(l === r) {
            this.tree[treeIndex] = e;
            return;
        }
        // 找到index所对应的叶子
        let mid = l + Math.floor((r-l)/2);
        // 以treeIndex的节点为[l...mid]和[mid+1...r]两部分
        let leftTreeIndex = this.leftChild(treeIndex);
        let rightTreeIndex = this.rightChild(treeIndex);
        if(index >= mid+1)
            this.__set(rightTreeIndex, mid+1, r, index, e);
        else // index <= mid
            this.__set(leftTreeIndex, l, mid, index, e);
        this.tree[treeIndex] = this.merge(this.tree[leftTreeIndex], this.tree[rightTreeIndex]);
    }
    // 返回完全二叉树的数组表示中，一个索引所表示的元素的左孩子节点的索引
    leftChild(index) {
        return 2*index+1;
    }
    // 返回完全二叉树的数组表示中，一个索引所表示的元素的右孩子节点的索引
    rightChild(index) {
        return 2*index+2;
    }
}