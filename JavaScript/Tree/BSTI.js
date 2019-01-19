/*
 * 定义节点
 */
function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
    this.show = show;
}

// 输出数据
function show() {
    return this.data;
}

/*
 * 定义二叉树
 */
module.exports = function BST() {
    this.root = null;
    this.insert = insert;
    this.insertNode = insertNode;
    this.preOrderTraversal = preOrderTraversal;
    this.preOrderTranversalNode = preOrderTranversalNode;
    this.inOrderTraversal = inOrderTraversal;
    this.inOrderTraversalNode = inOrderTraversalNode;
    this.postOrderTraversal = postOrderTraversal;
    this.postOrderTraversalNode = postOrderTraversalNode;
    this.getMin = getMin;
    this.getMax = getMax;
    this.search = search;
    this.remove = remove;
    this.getSuccessor = getSuccessor;
}

// 插入数据
function insert(data) {
    // 根据data创建对应的node
    var newNode = new Node(data);
    // 判断根节点是否有值
    if (this.root === null) {
        this.root = newNode;
    } else {
        // 插入该节点
        this.insertNode(this.root, newNode);
    }
}

// 判断插入节点位置，并插入该数据
function insertNode(node, newNode) {
    // 判断节点插入位置
    // 首先判断是否小于该节点的值
    if (newNode.data < node.data) {
        // 如果该节点没有左子树
        if (node.left === null) {
            node.left = newNode;
        } else {
            // 该节点左子树还有节点，进行递归判断
            this.insertNode(node.left, newNode);
        }
    } else {
        // 准备向右子树插入数据
        if (node.right === null) {
            // node的右子树上没有内容
            node.right = newNode;
        } else {
            // 该节点右子树还有节点，进行递归判断
            this.insertNode(node.right, newNode);
        }
    }
}

// 遍历方法
// 先序遍历
// handler为数据展示的方式
function preOrderTraversal(handler) {
    this.preOrderTranversalNode(this.root, handler);
}
function preOrderTranversalNode(node, handler) {
    if (node !== null) {
        handler(node.data);
        this.preOrderTranversalNode(node.left, handler);
        this.preOrderTranversalNode(node.right, handler);
    }
}
// 中序遍历
function inOrderTraversal(handler) {
    this.inOrderTraversalNode(this.root, handler);
}
function inOrderTraversalNode(node, handler) {
    if (node !== null) {
        this.inOrderTraversalNode(node.left, handler);
        handler(node.data);
        this.inOrderTraversalNode(node.right, handler);
    }
}
// 后续遍历
function postOrderTraversal(handler) {
    this.postOrderTraversalNode(this.root, handler);
}
function postOrderTraversalNode(node, handler) {
    if (node !== null) {
        this.postOrderTraversalNode(node.left, handler);
        this.postOrderTraversalNode(node.right, handler);
        handler(node.data);
    }
}


// 获取最大值和最小值
function getMin() {
    var node = this.root;
    while (node.left !== null) {
        node = node.left;
    }
    return node.data;
}
function getMax() {
    var node = this.root;
    while (node.right !== null) {
        node = node.right;
    }
    return node.data;
}

// 搜索值
/*
function search(data) {
    return this.searchNode(this.root, data);
}
// 递归的写法
function searchNode(node, data) {
    // 如果传入的node为null,那么就退出递归
    if (node === null) {
        return false;
    }
    // 判断node节点的值和传入的data大小
    if (node.data > data) { 
        // 传入的data较小, 向左边继续查找
        return this.searchNode(node.left, data);
    } else if (node.data < data) { 
        // 传入的data较大, 向右边继续查找
        return this.searchNode(node.right, data)
    } else { 
        // 相同, 说明找到了data
        return true
    }
}
*/
function search(data) {
    var node = this.root;
    while (node !== null) {
        if (node.data > data) {
            node = node.left;
        } else if (node.data < data) {
            node = node.right;
        } else {
            return true;
        }
    }
    return false;
}

// 删除节点

function remove(data) {
    // 定义临时保存的变量
    var current = this.root;
    var parent = this.root;
    var isLeftChild = true;
    // 开始查找节点
    while (current.data !== data) {
        parent = current;
        if (data < current.data) {
            isLeftChild = true;
            current = current.left;
        } else {
            isLeftChild = false;
            current = current.right;
        }
        // 如果发现current已经指向null, 那么说明没有找到要删除的数据
        if (current === null) return false;
    }
    // 删除的结点是叶结点
    if (current.left === null && current.right === null) {
        if (current == this.root) {
            this.root == null;
        } else if (isLeftChild) {
            // 如果是左子树，则置左子树为null
            parent.left = null;
        } else {
            parent.right = null;
        }
    }
    // 删除有一个子节点的节点
    else if (current.right === null) {
        if (current == this.root) {
            this.root = current.left;
        } else if (isLeftChild) {
            // 如果是左子树，则将父树的左子树指向子树的子树
            parent.left = current.left;
        } else {
            parent.right = current.left;
        }
    } else if (current.left === null) {
        if (current == this.root) {
            this.root = current.right;
        } else if (isLeftChild) {
            parent.left = current.right;
        } else {
            parent.right = current.right;
        }
    }
    // 删除有两个节点的节点
    else {
        // 获取后继节点
        var successor = this.getSuccessor(current);
        // 判断是否是根节点
        if (current == this.root) {
            this.root = successor;
        } else if (isLeftChild) {
            parent.left = successor;
        } else {
            parent.right = successor;
        }
        // 将删除节点的左子树赋值给successor
        successor.left = current.left;
    }
    return true;
}

// 找后继的方法
function getSuccessor(delNode) {
    // 使用变量保存临时的节点 
    var successorParent = delNode; // 后继节点的父节点
    var successor = delNode;    // 后继节点
    var current = delNode.right; // 要从右子树开始找
    // 寻找节点
    while (current !== null) {
        successorParent = successor;
        successor = current;
        // 向左查找
        current = current.left;
    }
    // 如果后继系节点不等于删除节点的右节点
    // 替换节点，把后继节点的右子树赋给其父节点左子树
    // 后继节点的右子树变成删除节点的右子树
    if (successor != delNode.right) {
        successorParent.left = successor.right;
        successor.right = delNode.right;
    }
    return successor;
}