/*
 * 定义集合
 */
module.exports = function Set() {
    // 存储数据
    var items = {};

    // 判断是否已经有该数据
    this.has = function (value) {
        return items.hasOwnProperty(value);
    }

    // 添加数据
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    }

    // 删除数据
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    }

    // 清空数据
    this.clear = function () {
        items = [];
    }

    // 打印集合
    this.print = function () {
        console.log(items);
    }

    // 返回集合大小
    this.size = function () {
        var count = 0;
        for (var prop in items) {
            if (items.hasOwnProperty(prop)) {
                ++count;
            }
            return count;
        }
    }

    // 返回所有数据
    this.values = function () {
        return Object.keys(items);
    }

    // 获得交集
    this.union = function (otherSet) {
        // 创建新的集合
        var unionSet = new Set(); 
        // 获得当前集合的所有数据
        var values = this.values();
        // 加入到新的集合中
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        // 获取另一集合所有数据
        values = otherSet.values(); 
        // // 加入到新的集合中
        for (var i = 0; i < values.length; i++) {
            unionSet.add(values[i]);
        }
        // 返回集合
        return unionSet;
    }
    // 差集
    this.difference = function (otherSet) {
        // 创建新的集合
        var differenceSet = new Set();
        // 获得当前集合的所有数据
        var values = this.values();
        for (var i = 0; i < values.length; i++) {
            // 判断当前的值是否有在otherSet中，没有则加入到新的集合中
            if (!otherSet.has(values[i])) {
                differenceSet.add(values[i])
            }
        }
        // 返回集合
        return differenceSet;
    }
    // 子集
    this.subset = function (otherSet) {
        // 如果当前集合数量大于otherSet，返回false
        if (this.size() > otherSet.size()) {
            return false;
        } else {
            var values = this.values();
            for (var i = 0; i < values.length; i++) {
                // 如果当前集合的值otherSet不包含，则不是子集
                if (!otherSet.has(values[i])) {
                    return false
                }
            }
            return true;
        }
    }
}

