/*
 * 定义字典类
 */
function Dictionary() {
    this.datastore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
}

// 添加数据
function add(key, value) {
    this.datastore[key] = value;
}

// 查找数据
function find(key) {
    return this.datastore[key];
}

// 删除数据
function remove(key) {
    delete this.datastore[key];
}

// 显示所有数据
// 并对结果进行了排序
function showAll() {
    for(var key in Object.keys(this.datastore).sort()) {
        print(key + " -> " + this.datastore[key]);
    }
}

// 返回元素个数
function count() {
    var n = 0;
    for(var key in Object.keys(this.datastore)) {
        ++n;
    }
    return n;
}

// 清空字典
function clear() {
    for(var key in Object.keys(this.datastore)) {
        delete this.datastore[key];
    }
}


