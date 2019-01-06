/*
 * 定义节点
 */
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

// 输出数据
function show() {
    return this.data;
}

/*
 * 定义二叉树
 */
function BST() {
    this.root = null;
    this.insert = insert;
    this.inOrder = inOrder;
    this.preOrder = preOrder;
    this.postOrder = postOrder;
    this.getMin = getMin;
    this.getMax = getMax;
    this.find = find;
    this.remove = remove;
}

// 插入数据
function insert(data) {
    var n = new Node(data, null, null);
    if (this.root === null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while( true ) {
            parent = current;
            if(data < current.data) {
                current = current.left;
                if(current === null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if(current === null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

// 中序遍历
function inOrder(node) {
    if(!(node === null)) {
        inOrder(node.left);
        putstr(node.show() + " ");
        inOrder(node.right);
    }
}

// 先序遍历
function preOrder(node) {
    if(node !== null) {
        putstr(node.show() + " ");
        preOrder(node.left);
        preOrder(node.right);
    }
}

// 后续遍历
function postOrder(node) {
    if(node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        putstr(node.show() + " ");
    }
}

// 查找最小值
function getMin() {
    var current = this.root;
    while(current.left !== nul) {
        current = current.left;
    }
    return current.data;
}

// 查找最大值
function getMax() {
    var current = this.root;
    while(current.right !== null) {
        current = current.right;
    }
    return current.data;
}

// 查找元素
function find(data) {
    var current = this.root;
    while(current !== null) {
        if(current.data === data) {
            return current;
        } else if(current.data > data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return null;
}

// 删除元素
function remove(data) {
    root = removeNode(this.root, data);
}
// 辅助函数
function removeNode(node, data) {
    if(node == null) {
        return null;
    }
    if(data === node.data) {
        // 没有子节点的节点
        if(node.left === null && node.right === null) {
            return null;
        }
        // 如果没有左子节点的节点
        if(node.left === null) {
            return node.right;
        }
        // 如果没有右子节点的节点
        if(node.right === null) {
            return node.left;
        }
        // 有两个子节点的节点
        var tempNode = getMin(node.right);
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
    } else if(data < node.data){
        node.left = removeNode(node.left, data);
        return node;
    } else {
        node.right = removeNode(node.right, data);
        return node;
    }
}