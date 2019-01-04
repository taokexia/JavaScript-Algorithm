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
function LinkedList() {
    this.head = new Node("head");
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findPrevious = findPrevious;
}

// 查找元素
function find(item) {
    var curNode = this.head
    while(curNode.item !== item) {
        curNode = curNode.next;
    }
    return curNode;
}

// 插入新元素
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

// 显示所有元素
function display() {
    var currNode = this.head;
    while(!(currNode.next === null)) {
        print(currNode.next.element);
        currNode = currNode.next;
    }
}

// 删除函数的辅助函数：用于找到删除元素的前一个元素
function findPrevious(item) {
    var currNode = this.head
    while(!(currNode.next === null) && (currNode.next.element !== item)) {
        currNode = currNode.next;
    }
    return currNode;
}

// 删除元素
function remove(item) {
    var prevNode = this.findPrevious(item);
    if (!(prevNode === null)) {
        prevNode.next = prevNode.next.next;
    }
}
