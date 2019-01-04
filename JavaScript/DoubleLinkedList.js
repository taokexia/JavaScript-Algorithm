/*
 * 定义节点
 */
function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

/*
 * 定义双向链表
 */
function DoubleLinkedList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
}

// 查找节点
function find(item) {
    var currNode = this.head;
    while(currNode.element !== item) {
        currNode = currNode.next;
    }
    return currNode;
}

// 插入数据
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    newNode.previous = current;
    current.next = newNode;
}

// 展示数据
function display() {
    var currNode = this.head;
    while(!(currNode.next === null) ) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}

// 删除数据
function remove(item) {
    var currNode = this.find(item);
    if(!(currNode === null) ) {
        currNode.previous.next = currNode.next;
        currNode.next.previous = currNode.previous;
        currNode.next = null;
        currNode.previous = null;
    }
}

// 返回最后一个元素
function findLast() {
    var currNode = this.head;
    while(!(currNode.next === null)) {
        currNode = currNode.next;
    }
    return currNode;
}

// 从后开始遍历链表
function dispReverse() {
    var currNode = this.head;
    currNode = this.findLast();
    while(!(currNode.previous === null)) {
        print(currNode.element);
        currNode = currNode.previous;
    }
}