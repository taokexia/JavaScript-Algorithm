/*
 * 定义节点类
 */
function Node(element) {
    this.element = element;
    this.next = null;
}

/*
 * 定义链表
 */
var  LinkedList =  function(){
    // 定义链表的头结点和长度属性
    this.head = null;
    this.length = 0;
}
// 链表尾部追加元素方法
LinkedList.prototype.append = function(element) {
    // 根据新元素创建节点
    var newNode = new Node(element);

    // 判断当前链表是否为空
    if(this.head === null) {
        this.head = newNode;
    } else {
        // 当前链表不为空
        var current = this.head;
        while(current.next) {
            current = current.next;
        }
        // 为最后一个节点赋值
        current.next = newNode;
    }
    // 最后，增加链表长度
    this.length++;
}

// 根据下标插入元素
LinkedList.prototype.insert = function(position, element) {
    // 检测越界问题: 越界插入失败
    if (position < 0 || position > this.length) return false;

    var newNode = new Node(element);
    var current = this.head;
    var previous = null;
    var index = 0;

    if(position === 0) {
        newNode.next = current;
        this.head = newNode;
    } else {
        while(index++ < position) {
            previous = current;
            current = current.next;
        }

        newNode.next = current;
        previous.next = newNode;
    }
    // 最后增加长度
    this.length++;
    return true;
}

 // 根据位置移除节点
 LinkedList.prototype.removeAt = function (position) {
    // 检测越界问题: 越界移除失败, 返回null
    if (position < 0 || position >= this.length) return null;
    // 定义变量, 保存信息
    var current = this.head;
    var previous = null;
    var index = 0;

    // 判断是否是移除第一项
    if (position === 0) {
        this.head = current.next;
    } else {
        while (index++ < position) {
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
    }
    // 链表长度减1
    this.length--;
    // 返回移除的数据
    return current.element;
}

// 查找值所对应的索引
LinkedList.prototype.indexOf = function(element) {
    // 定义变量
    var current = this.head;
    var index = 0;

    while(current) {
        if(current.element === element) {
            return index;
        }
        index++;
        current = current.next;
    }
    // 如果没有找到，返回-1
    return -1;
}

// 根据元素删除信息
LinkedList.prototype.remove = function(element) {
    var index = this.indexOf(element);
    return this.removeAt(index);
}

// 判断链表是否为空
LinkedList.prototype.isEmpty = function () {
    return this.length == 0
}

// 获取链表的长度
LinkedList.prototype.size = function () {
    return this.length
}

// 获取第一个节点
LinkedList.prototype.getFirst = function () {
    return this.head.element
}

// 链表的toString方法
LinkedList.prototype.toString = function() {
    var current = this.head;
    var str = "";
    while(current) {
        str += ", "+current.element;
        current = current.next;
    }
    // 返回字符串
    return str.slice(1);
}


module.exports = LinkedList;