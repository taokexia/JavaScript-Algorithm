// 定义节点
class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

// 定义AVL树
module.exports = class AVLTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    // 判断该二叉树是否是一课二分搜索树
    isBST() {
        let keys = [];
        this.inOrder(this.root, keys);
        for(let i = 1; i < keys.length; i++) {
            if(keys[i-1] > keys[i]) {
                return false;
            }
        }
        return true;
    }
    inOrder(node, keys) {
        if(node === null)
            return;
        this.inOrder(node.left, keys);
        keys.push(node.key);
        this.inOrder(node.right, keys);
    }
    // 判断该二叉树是否是一棵平衡二叉树,递归算法
    isBalanced() {
        return this._isBalanced(this.root);
    }
    _isBalanced(node) {
        if(node === null)
            return true;
        let balanceFactor = this.getBalanceFactor(node);
        if(Math.abs(balanceFactor) > 1)
            return false;
        return this._isBalanced(node.left) && this._isBalanced(node.right);
    }
    // 获得节点node的高度
    getHeight(node) {
        if(node === null)
            return 0;
        return node.height;
    }
    // 获得节点node的平衡因子
    getBalanceFactor(node) {
        if(node === null)
            return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }
    // 向二分搜索树添加新的元素(key, value)
    add(key, value) {
        this.root = this._add(this.root, key, value);
    }
    // 向以node为根的二分搜索树中插入元素(key, value),递归算法
    // 返回插入新节点后二分搜索树的根
    _add(node, key, value) {
        if(node === null) {
            this.size++;
            return new Node(key, value);
        }
        // 如果key小于节点的key，则插入到节点的左子树中
        if(key < node.key) {
            node.left = this._add(node.left, key, value);
        } else if(key > node.key) {
            // 如果key大于节点的key，则插入到节点的右子树中
            node.right = this._add(node.right, key, value);
        } else {
            // 更新操作
            node.value = value;
        }

        // 更新height
        node.height = 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));

        // 计算平衡因子
        let balanceFactor = this.getBalanceFactor(node);
        // 在II的代码中添加调节平衡的方法
        if(Math.abs(balanceFactor) > 1) {
            console.log('unbalanced:' + balanceFactor);
        }
        return node;
    }
    // 返回以node为根节点的二分搜索树中，key所在节点
    getNode(node, key) {
        if(node === null)
            return null;
        if(key.equals(node.key))
            return node;
        else if(key < node.key)
            return this.getNode(node.left, key);
        else
            return this.getNode(node.right, key);
    }
    // 判断是否包含该node
    contains(key) {
        return this.getNode(this.root, key) !== null;
    }
    // 根据key值获取节点
    get(key) {
        let node = this.getNode(this.root, key);
        return node === null ? null : node.value;
    }
    // 设置node的值
    set(key, value) {
        let node = this.getNode(this.root, key);
        return node === null ? null : node.value;
    }
    // 返回以node为根的二分搜索树的最小值所在节点
    minimun(node) {
        if(node.left === null)
            return node;
        return this.minimun(node);
    }
    // 删除掉以node为根的二分搜索树中的最小节点
    // 返回删除节点后新的二分搜索树的根
    removeMin(node) {
        if(node.left === null) {
            let rightNode = node.right;
            node.right = null;
            this.size--;
            return rightNode;
        }
        node.left = this.removeMin(node.left);
        return node;
    }
    // 从二分搜索树中删除键为key的节点
    remove(key) {
        let node = this.getNode(this.root, key);
        if(node !== null) {
            this.root = this._remove(this.root, key);
            return node.value;
        }
        return null;
    }
    _remove(node, key) {
        if(node === null) {
            return null;
        }

        if(key < node.key) {
            node.left = this._remove(node.left, key);
            return node;
        } else if(key > node.key) {
            node.right = this._remove(node.right, key);
            return node;
        }
        else {
            // 待删除节点左子树为空的情况
            if(node.left === null) {
                let rightNode = node.right;
                node.right = null;
                this.size--;
                return rightNode;
            }
            // 待删除节点右子树为空的情况
            if(node.right === null) {
                let leftNode = node.left;
                node.left = null;
                this.size--;
                return leftNode;
            }

            // 待删除节点左右子树均不为空的情况
            
            // 找到比待删除节点大的最小节点，即待删除节点右子树的最小节点
            // 用这个节点替换待删除节点的位置
            let successor = this.minimun(node.right);
            successor.right = this.removeMin(ndoe.right);
            successor.left = node.left;

            node.left = node.right = null;

            return successor;
        }
    }
    // 获取树的大小
    getSize() {
        return this.size;
    }
    // 判断树是否为空
    isEmpty() {
        return this.size === 0;
    }
}