/*
 * 定义节点
 */
function Node(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
}
/*
 * 定义双向循环链表
 */
export class DoubleLoopLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // 添加元素
    append(element) {
        let node = new Node(element);
        if(!this.head) {
            this.head = node;
            this.tail = node;
            this.head.prev = tail;
            this.tail.next = this.head;
        } else {
            this.tail.next = node;
            node.prev = tail;
            node.next = this.head;
            this.head.prev = node;
        }
        // 最后更新长度
        this.length++;
    }
    // 在任意位置上插入数据
    insert(position, element) {
        // 判断越界的问题
        if (position < 0 || position > this.length) return false;
        let node = new Node(element);
        if(position === 0) {
            if(this.head === null) {
                this.head = node;
                this.tail = node;
                this.head.prev = node;
                this.tail.next = node;
            } else {
                this.head.prev = node;
                node.next = this.head;
                this.head = node;
                // 更新tail的索引
                this.tail.next = node;
                node.prev = this.tail;
            }
        } else if(position === this.length) {
            // 插入位置在末尾，作用等价于append
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            // 更新head的索引
            node.next = this.head;
            this.head.prev = node;
        } else {
            // 在中间插入数据
            var index = 0;
            var current = this.head;
            var previous = null;
            while(index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = node;
            node.prev = previous;
            current.prev = node;
            node.next = current;
        }
        // 更新长度
        this.length++;
        return true;
    }
    // 根据位置删除对应的元素
    removeAt(position) {
        // 判断越界的问题
        if (position < 0 || position >= this.length) return null;
        // 判断移除的位置
        var current = this.head;
        if(position === 0) {
            if(this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.prev = this.tail;
                this.tail.next = this.head;
            }
        } else if(position === this.length-1) {
            // 移除的是尾部的元素
            current = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = this.head;
            this.head.prev = this.tail;
        } else {
            // 移除的是中间的元素
            var index = 0;
            var previous = null;
            while(index++) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            current.next.prev = previous;
        }
        // 更新长度
        this.length--;
        return current;
    }
    // 根据元素获取在链表中的位置
    indexOf(element) {
        var current = this.head;
        var index = 0;
        // 查找正确的信息
        while(current) {
            if(current.element === element) {
                return index;
            }
            index++;
            current = current.next;
            // 未找到位置，且索引已经超过链表长度，返回-1
            if(index > this.length) {
                return -1;
            }
        }
    }
    // 根据元素删除
    remove(element) {
        var index = this.indexOf(element);
        if(index !== -1)
            this.removeAt(index);
    }
    // 判断是否为空
    isEmpty() {
        return this.length === 0;
    }
    // 返回链表长度
    size() {
        return this.length;
    }
    // 获取第一个元素
    getHead = function () {
        return this.head.element;
    }
    // 获取最后一个元素
    getTail = function () {
        return this.tail.element;
    }

    // 遍历方法的实现
    // 正向遍历的方法
    forwardString = function () {
        var current = this.head;
        var forwardStr = "";
        var index = 0;
        while (index++ < this.length) {
            forwardStr += ", " + current.element;
            current = current.next;
        }
        return forwardStr.slice(1);
    }
    // 反向遍历的方法
    reverseString = function () {
        var current = this.tail;
        var reverseStr = "";
        var index = 0;
        while (index++ < this.length) {
            reverseStr += ", " + current.element;
            current = current.prev;
        }
        return reverseStr.slice(1);
    }
    // 实现toString方法
    toString = function () {
        return this.forwardString();
    }
}

