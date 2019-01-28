const RED = true;
const BLACK = false;

// 定义红黑树节点
class Node {
    constructor(key, value) {
        this.key = key; // 键
        this.value = value; // 值
        this.color = RED; // 颜色
        this.left = null; // 左子节点
        this.right = null; // 右子节点
    }
}

module.exports = class RBTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    // 判断节点node的颜色
    isRed(node) {
        if(node === null)
            return BLACK;
        return node.color;
    }

    //      node                            x
    //     /    \         左旋转           /  \   
    //    T1     x   ---------------->   node  T3
    //          /  \                    /   \
    //         T2  T3                  T1   T2
    leftRotate(node) {
        let x = node.right;
        // 左旋转
        node.right = x.left;
        x.left = node;
        // 更新颜色;
        x.color = node.color;
        node.color = RED;

        return x;
    }

    //      node                            x
    //     /    \         右旋转           /  \   
    //    x     T2   ---------------->   y    node
    //   /  \                                /   \
    //  y   T1                              T1    T2
    rightRotate(node) {
        let x = node.left;
        // 右旋转;
        node.left = x.right;
        x.right = node;
        // 更新颜色;
        x.color = node.color;
        node.color = RED;

        return x;
    }
    // 颜色翻转
    flipColors(node) {
        node.color = RED;
        node.left.color = BLACK;
        node.right.color = BLACK;
    }
    // 向二分搜索树中添加新的元素(key, value)
    add(key, value) {
        this.root = this._add(this.root, key, value);
        this.root.color = BLACK; // 最终根节点为黑色节点
    }
    // 向以node为根的二分搜索树中插入元素(key, value),递归算法
    // 返回插入新节点后红黑树的根
    _add(node, key, value) {
        if(node === null) {
            this.size++;
            return new Node(key, value); // 默认插入红色节点
        }

        if(key < node.key) {
            node.left = this._add(node.left, key, value);
        } else if(key > node.key) {
            node.right = this._add(node.right, key, value);
        } else {
            node.value = value; // 更新值
        }
        // 利用回溯法更新颜色
        // 颜色变化情况： B -- 黑色  R -- 红色  n -- null(叶子节点)
        // 1. 插入'A'
        //     A(B)
        //    /    \
        // n(B)    n(B)
        // 
        // 2. 插入'F': 需要变换，使用方法1变换
        //     A(B)                       F(B)
        //    /    \            左旋      /   \
        //  n(B)   F(R)       ------->  A(R)   n(B)
        //        /    \               /   \
        //       n(B)  n(B)           n(B)  n(B)
        // 
        // 3. 插入 'M'
        //         F(B)          
        //       /     \          
        //     A(R)     M(R)      
        //    /   \     /   \      
        // n(B)  n(B)  n(B)  n(B)  
        // 
        // 4. 插入 'C': 需要变换，使用方法1变换,之后再用方法2变换,最后，再用方法3翻转颜色,最后根节点变换为黑色
        //         F(B)                            F(B)                               C(B)                                 C(R)
        //       /     \                         /      \                           /      \                             /      \
        //     A(R)     M(R)       左旋         C(R)      M(R)           右旋       A(R)    F(R)           翻转颜色      A(B)     F(B)
        //    /   \     /   \     ------->    /   \      /    \       -------->  /   \     /    \         --------->  /   \     /    \
        // n(B)  C(R)  n(B)  n(B)           A(R)  n(B)  n(B)   n(B)            n(B) n(B)  n(B)  M(R)                n(B)  n(B) n(B)  M(R)
        //      /    \                     /   \                                               /   \                                /   \
        //    n(B)   n(B)                n(B)  n(B)                                           n(B)  n(B)                          n(B)  n(B) 

        // 方法1：如果当前节点的右节点为红色，且左节点非红色，则进行左旋
        if(this.isRed(node.right) && !this.isRed(node.left)) {
            node = this.leftRotate(node);
        }
        // 方法2：如果当前节点的左节点和左左节点都为红色，则进行右旋
        if(this.isRed(node.left) && this.isRed(node.left.left)) {
            node = this.rightRotate(node);
        }
        // 方法3：如果当前节点左右子树都为红色，则翻转颜色
        if(this.isRed(node.left) && this.isRed(node.right))
            this.flipColors(node);
        return node;
    }
    // 返回以node为根节点的二分搜索树中，key所在的节点
    getNode(node, key) {
        if(node === null) {
            return null;
        }
        if(key === node.key) {
            return node;
        } else if(key < node.key) {
            return this.getNode(node.left, key);
        } else {
            return this.getNode(node.right, key);
        }
    }
    // 判断是包含该值
    contains(key) {
        return this.getNode(this.root, key) !== null;
    }
    get(key) {
        let node = this.getNode(this.root, key);
        return node === null ? null : node.value;
    }
    set(key, value) {
        let node = this.getNode(this.root, key);
        if(node === null) {
            throw(key+" doesn't exist!");
        }
        node.value = value;
    }
    // 返回以node为根的二分搜索树的最小值所在的节点
    minimun(node) {
        if(node.left === null)
            return node;
        return this.minimun(node.left);
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
        }
        else if(key > node.key) {
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
            // 用这个节点顶替待删除节点的位置
            let successor = this.minimun(node.right);
            successor.right = this.removeMin(node.right);
            successor.left = node.left;
            node.left = node.right = null;
            return successor;
        }
    }
    // 返回size
    getSize() {
        return this.size;
    }
    // 判断是否为空
    isEmpty() {
        return this.size === 0;
    }
}