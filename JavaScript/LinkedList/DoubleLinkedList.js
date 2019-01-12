/*
 * 定义节点
 */
function Node(element) {
    this.element = element;
    this.next = null;
    this.prev = null;
}

/*
 * 定义双向链表
 */
module.exports = function DoubleLinkedList() {
    // 定义属性
    this.head = null;
    this.tail = null;
    this.length = 0;

    // 尾部添加元素
    DoubleLinkedList.prototype.append = function(element) {
        // 创建节点
        var newNode = new Node(element);

        // 插入元素
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        // 最后更新长度
        this.length++;
    }
    
    // 在任意位置上插入数据
    DoubleLinkedList.prototype.insert = function(position, element) {
        // 判断越界的问题
        if (position < 0 || position > this.length) return false

        // 创建节点
        var newNode = new Node(element);

        if(position === 0) {
            // 判断头结点是否为空
            if(this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;
            }
        } else if(position === this.length ){
            // 当前插入到链表最后
            // 思考: 这种情况是否需要判断链表为空的情况呢? 答案是不需要, 为什么?
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        } else {
            // 在中间插入数据
            var index = 0;
            var current = this.head;
            var previous = null;

            while(index++ < position) {
                previous = current;
                current = current.next;
            }

            // 插入节点
            newNode.next = current;
            current.prev = newNode;
            previous.next = newNode;
            newNode.prev = previous;
        }
        // 更新长度
        this.length++;
        return true;
    }

    // 根据位置删除对应的元素
    DoubleLinkedList.prototype.removeAt = function (position) {
        // 判断越界的问题
        if (position < 0 || position >= this.length) return null;
        // 判断移除的位置
        var current = this.head;
        if (position === 0) {
            if (this.length === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
        } else if (position === this.length -1) {
            current = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            var index = 0;
            var previous = null;
            while (index++ < position) {
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            current.next.prev = previous;
        }
        // 更新长度
        this.length--;
        return current.element;
    }

    // 根据元素获取在链表中的位置
    DoubleLinkedList.prototype.indexOf = function (element) {
        // 定义变量保存信息
        var current = this.head;
        var index = 0;
        // 查找正确的信息
        while (current) {
            if (current.element === element) {
                return index;
            }
            index++;
            current = current.next;
        }
        // 来到这个位置, 说明没有找到, 则返回-1
        return -1;
    }

    // 根据元素删除
    DoubleLinkedList.prototype.remove = function (element) {
        var index = this.indexOf(element);
        return this.removeAt(index);
    }

    // 判断是否为空
    DoubleLinkedList.prototype.isEmpty = function () {
        return this.length === 0;
    }

    // 获取链表长度
    DoubleLinkedList.prototype.size = function () {
        return this.length;
    }

    // 获取第一个元素
    DoubleLinkedList.prototype.getHead = function () {
        return this.head.element;
    }

    // 获取最后一个元素
    DoubleLinkedList.prototype.getTail = function () {
        return this.tail.element;
    }

    // 遍历方法的实现
    // 正向遍历的方法
    DoubleLinkedList.prototype.forwardString = function () {
        var current = this.head;
        var forwardStr = "";
        while (current) {
            forwardStr += ", " + current.element;
            current = current.next;
        }
        return forwardStr.slice(1);
    }
    // 反向遍历的方法
    DoubleLinkedList.prototype.reverseString = function () {
        var current = this.tail;
        var reverseStr = "";
        while (current) {
            reverseStr += ", " + current.element;
            current = current.prev;
        }
        return reverseStr.slice(1);
    }

    // 实现toString方法
    DoubleLinkedList.prototype.toString = function () {
        return this.forwardString();
    }
}