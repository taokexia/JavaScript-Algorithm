// 定义节点
function Node(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;       
}

/*
 * 定义二分搜索树
 */
module.exports.BST = class BST {
    constructor() {
        this.root = null; // 根节点
        this.count = 0; // 节点个数
    }

    // 向二分搜索树种插入一个新的数据对
    insert(key, value) {
        this.root = this.__insert(this.root, key, value);
    }
    // 向以node为根的二分搜索树中，插入节点(key, value),使用递归算法
    // 返回插入新节点后的二分搜索树的根
    __insert(node, key, value) {
        if(node === null) {
            this.count++;
            return new Node(key, value);
        }
        // 如果key在树中已经存在，则更新value
        if(key === node.key) node.value = value;
        else if(key < node.key)
            node.left = this.__insert(node.left, key, value);
        else
            node.right = this.__insert(node.right, key, value);
        return node; // 返回原来的节点
    }

    // 查看二分搜索树种是否存在键key
    contain(key) {
        return this.__contain(this.root, key);
    }
    // 查看node为根的二分搜索树种是否包含键值为key的节点，使用递归算法
    __contain(node, key) {
        if(node === null) return false;
        if(key === node.key) return true;
        else if(key < node.key) return this.__contain(node.left, key);
        else return this.__contain(node.right, key);
    }

    // 在二分搜索树种搜索键key所对应的值。如果这个值不存在返回null
    search(key) {
        return this.__search(this.root, key);
    }
    // 在以node为根的二分搜索树种中查找key所对应的value，使用递归算法
    __search(node, key) {
        if(node === null) return null;
        if(key === node.key) return node.value;
        else if(key < node.key) return this.__search(node.left, key);
        else return this.__search(node.right, key);
    }

    // 二分搜索树的前序遍历,深度优先遍历
    preOrder() {
        let str = "";
        this.__preOrder(this.root, (node) => {
            str += node.key + " ";
        });
        console.log(str);
    }
    // 对以node为根的二叉搜索树进行前序遍历，递归算法
    // 传入handle函数用于输出数据
    __preOrder(node, handle) {
        if(node !== null) {
            handle(node);
            this.__preOrder(node.left, handle);
            this.__preOrder(node.right, handle);
        }
    }

    // 二分搜索树的中序遍历,深度优先遍历
    inOrder() {
        let str = "";
        this.__inOrder(this.root, (node) => {
            str += node.key + " ";
        });
        console.log(str);
    }
    // 对以node为根的二叉搜索树进行中序遍历，递归算法
    // 传入handle函数用于输出数据
    __inOrder(node, handle) {
        if(node !== null) {
            this.__inOrder(node.left, handle);
            handle(node);
            this.__inOrder(node.right, handle);
        }
    }

    // 二分搜索树的后序遍历,深度优先遍历
    postOrder() {
        let str = "";
        this.__postOrder(this.root, (node) => {
            str += node.key + " ";
        });
        console.log(str);
    }
    // 对以node为根的二叉搜索树进行后序遍历，递归算法
    // 传入handle函数用于输出数据
    __postOrder(node, handle) {
        if(node !== null) {
            this.__postOrder(node.left, handle);
            this.__postOrder(node.right, handle);
            handle(node);
        }
    }

    // 二分搜索树的层序遍历,广度优先遍历
    levelOrder() {
        let queue = [];
        let str = "";
        queue.push(this.root);
        while(queue.length > 0) {
            let node = queue.shift();
            str += node.key + " ";
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        console.log(str);
    }

    // 寻找二分搜索树的最小的值
    minimun() {
        let node = this.__minimum(this.root);
        return node.key;
    }
    // 返回以node为根的二分搜索树的最小键值所在的节点，递归算法
    __minimum(node) {
        if(node.left === null) return node;
        return this.__minimum(node.left);
    }

    // 寻找二分搜索树的最大的值
    maximun() {
        let node = this.__maximum(this.root);
        return node.key;
    }
    // 返回以node为根的二分搜索树的最小键值所在的节点，递归算法
    __maximum(node) {
        if(node.right === null) return node;
        return this.__maximum(node.right);
    }

    // 删除二分搜索树中最小值所在的节点
    removeMin() {
        if(this.root) this.root = this.__removeMin(this.root);
    }
    // 删除掉以node为根的二分搜索树中的最小节点
    // 返回删除节点后的二分搜索树的根
    __removeMin(node) {
        if(node.left === null) {
            let rightNode = node.right;
            this.count--;
            return rightNode;
        }
        node.left = this.__removeMin(node.left);
        return node;
    }

    // 删除二分搜索树中最小值所在的节点
    removeMax() {
        if(this.root) this.root = this.__removeMax(this.root);
    }
    // 删除掉以node为根的二分搜索树中的最大节点
    // 返回删除节点后的二分搜索树的根
    __removeMax(node) {
        if(node.right === null) {
            let leftNode = node.left;
            this.count--;
            return leftNode;
        }
        node.right = this.__removeMax(node.right);
        return node;
    }

    // 从二分搜索树种删除键值为key的节点
    remove(key) {
        this.root = this.__remove(this.root, key);
    }
    // 删除掉以node为根的二分搜索树种键值为key的节点
    // 返回删除节点后新的二分搜索树的根
    __remove(node, key) {
        if(node === null) return null;
        if(key < node.key) {
            node.left = this.__remove(node.left, key);
            return node;
        } else if(key > node.key) {
            node.right = this.__remove(node.right, key);
            return node;
        }
        else {
            // 待删除节点左子树为空的情况
            if(node.left === null) {
                let rightNode = node.right;
                this.count--;
                return rightNode;
            }
            // 待删除节点右子树为空的情况
            if(node.right === null) {
                let leftNode = node.left;
                this.count--;
                return leftNode;
            }
            // 待删除节点左右子树均不为空的情况
            // 找到比待删除节点大的最小节点，即待删除节点右子树的最小节点
            // 用这个节点替代删除节点的位置
            // 获得待删除节点右子树的最小节点
            let getRMinNode = this.__minimum(node.right);
            // 创建新的节点
            let successor = new Node(getRMinNode.key, getRMinNode.value);
            this.count++;
            successor.right = this.__removeMin(node.right);
            successor.left = node.left;
            this.count--;
            return successor;
        }
    }

    // 返回二分搜索树的节点个数
    size() {
        return this.count;
    }
    // 判断二分搜索树是否为空
    isEmpty() {
        return this.count === 0;
    }
}