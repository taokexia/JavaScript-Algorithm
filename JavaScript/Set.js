/*
 * 定义集合
 */
function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
    this.contains = contains;
}

// 添加元素
function add(data) {
    if(this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    } else {
        return false;
    }
}

// 删除元素
function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    } else {
        return false;
    }
}

// 展示数据
function show() {
    return this.dataStore;
}

// 是否包含该元素
function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    } else {
        return false;
    }
}

// 获取并集
function union(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++) {
        tempSet.add(this.dataStore[i]);
    }
    for (var i = 0; i < set.dataStore.length; i++) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}

// 获取交集
function intersect(set) {
    var tempSet = new Set();
    for (var i= 0; i < this.dataStore.length; i++) {
        if(set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

// 判断是否是输入集合的子集
function subset(set) {
    if(this.size() > set.size()) {
        return false;
    } else {
        for(var member in this.dataStore) {
            if (!set.contains(member))
                return false;
        }
    }
    return true;
}

// 返回集合大小
function size() {
    return this.dataStore.length;
}