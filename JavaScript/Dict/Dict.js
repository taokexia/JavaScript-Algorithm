/*
 * 定义字典类
 */
module.exports = function Dict() {
    this.datastore = {};
    this.set = set;
    this.has = has;
    this.get = get;
    this.remove = remove;
    this.keys = keys;
    this.values = values;
    this.showAll = showAll;
    this.size = size;
    this.clear = clear;
}

// 添加数据
function set(key, value) {
    this.datastore[key] = value;
}

// 判断是否有该数据
function has(key) {
    return this.datastore.hasOwnProperty(key);
}

// 根据key去获取value
function get(key) {
    return this.has(key) ? this.datastore[key] : undefined; 
}

// 获取所有的key
function keys() {
    return Object.keys(this.datastore);
}

// 获取所有的value
function values() {
    return Object.values(this.datastore);
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
function size() {
    return this.keys().length;
}

// 清空字典
function clear() {
    this.datastore = {};
}


