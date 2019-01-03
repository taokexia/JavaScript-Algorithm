/*
 * 栈的实现
 */
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

// 往栈中推入数据
function push(element) {
    this.dataStore[this.top++] = element;
}

// 从栈中取出数据
function pop() {
    return this.dataStore[--this.top];
}

// 获取栈顶的数据
function peek() {
    return this.dataStore[this.top-1];
}

// 清楚栈的数据
function clear() {
    this.top = 0;
}

// 返回栈的长度
function length() {
    return this.top;
}

