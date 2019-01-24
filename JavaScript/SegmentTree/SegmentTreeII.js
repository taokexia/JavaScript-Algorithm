// 线段树II
// 递归实现线段树
module.exports = class SegmentTree{
    constructor(nums, merge) {
        this.data = nums;
        // 指定节点的合并业务
        this.merge = merge;
        this.tree = new Array(nums.length).fill(0);
        this.tree.push(...nums);
        // 生成线段树
        // 两个子节点对应为：i*2, i*2+1
        for(let i = nums.length-1; i > 0; i--) {
            this.tree[i] = merge(this.tree[2*i],this.tree[2*i+1]);
        }
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
    // 线段树的更新操作
    // 将index位置的值，更新为e
    set(index, e) {
        index += this.data.length;
        let tree = this.tree;
        tree[index] = e;
        index = Math.floor(index / 2);
        while(index > 0) {
            // 更新父节点
            tree[index] = this.merge(tree[index*2],tree[index*2 + 1]);
            index = Math.floor(index/2);
        }
    }
    // 返回区间[queryL, queryR]的值
    query(l, r) {
        let ret = 0;
        let tree = this.tree;
        l += this.data.length;
        r += this.data.length;
        while(l <= r) {
            // 如果当前left区间是奇数，说明相对其父节点是右子节点(2*i+1)
            // 父节点中，左子节点是不在范围内的，所以不需要计算，要进行处理
            if(l % 2) {
                ret = this.merge(ret, tree[l]);
                l++;
            }
            // 如果当前right区间是偶数，说明相对其父节点是左子节点(2*i)
            // 父节点中，右子节点是不在范围内的，所以不需要计算，要进行处理
            if(!(r%2)) {
                ret = this.merge(ret, tree[r]);
                r--;
            }
            l = Math.floor(l/2);
            r = Math.floor(r/2);
        }
        return ret;
    }
}

