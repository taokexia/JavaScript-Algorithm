/*
 * 定义散列表
 */
module.exports = function HashTable() {
    // 定义属性
    this.storage = [];
    this.count = 0;
    this.limit = 8;

    this.isPrime = isPrime;
    this.getPrime = getPrime;
    this.hashFunc = hashFunc;
    this.put = put;
    this.get = get;
    this.remove = remove;
    this.size = size;
    this.isEmpty = isEmpty;
    this.resize = resize;
}

// 判断是否是质数
function isPrime(num) {
    var temp = parseInt(Math.sqrt(num));
    // 循环判断
    for (var i = 2; i <= temp; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
// 获取质数
function getPrime(num) {
    while (!isPrime(num)) {
        num++;
    }
    return num;
}

 // 哈希函数
 function hashFunc(str, max) {
    // 初始化hashCode的值
    var hashCode = 0;
    // 霍纳算法, 来计算hashCode的数值
    for (var i = 0; i < str.length; i++) {
        hashCode = 37 * hashCode + str.charCodeAt(i);
    }
    // 取模运算
    hashCode = hashCode % max;
    return hashCode;
}

// 插入数据方法
function put(key, value) {
    // 获取key对应的index
    var index = this.hashFunc(key, this.limit);
    // 取出数组(也可以使用链表)
    // 数组中放置数据的方式: [[ [k,v], [k,v], [k,v] ] , [ [k,v], [k,v] ], [ [k,v] ] ]
    var bucket = this.storage[index];
    // 判断这个数组是否存在
    if (bucket === undefined) {
        // 如果不存在，则创建桶
        bucket = [];
        this.storage[index] = bucket;
    }
    // 判断传递的数据是新增还是修改原来的值.
    var override = false
    for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        if (tuple[0] === key) {
            // 匹配到数据，则进行修改
            tuple[1] = value;
            override = true;
        }
    }
    // 如果前面没有匹配到数据，则说明是新增的数据
    if (!override) {
        // 桶中加入新增数据
        bucket.push([key, value]);
        this.count++;
        // 如果数量超过限制的75%，则要进行扩容
        if (this.count > this.limit * 0.75) {
            // 扩容大小近似于原来的两倍
            var primeNum = this.getPrime(this.limit * 2);
            this.resize(primeNum);
        }
    }
}

// 获取存放的数据
function get(key) {
    // 获取key对应的index;
    var index = this.hashFunc(key, this.limit);
    // 获取对应的bucket
    var bucket = this.storage[index];
    // 3.如果bucket为null, 那么说明这个位置没有数据
    if (bucket == null) {
        return null;
    }
    // 有bucket, 判断是否有对应的key
    for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        if (tuple[0] === key) {
            return tuple[1];
        }
    }
    // 没有找到, return null
    return null;
}

// 删除数据
function remove(key) {
    // 获取key对应的index
    var index = this.hashFunc(key, this.limit);
    // 获取对应的bucket
    var bucket = this.storage[index];
    // 判断同是否为null, 为null则说明没有对应的数据
    if (bucket == null) {
        return null;
    }
    // 遍历bucket, 寻找对应的数据
    for (var i = 0; i < bucket.length; i++) {
        var tuple = bucket[i];
        if (tuple[0] === key) {
            bucket.splice(i, 1);
            this.count--;
            // 当限制量大于7，且小于限制的25%
            // 缩小数组的容量
            if (this.limit > 7 && this.count < this.limit * 0.25) {
                var primeNum = this.getPrime(Math.floor(this.limit / 2));
                this.resize(primeNum);
            }
        }
        return tuple[1];
    }
    // 5.来到该位置, 说明没有对应的数据, 那么返回null
    return null;
}

// isEmpty方法
function isEmpty() {
    return this.count === 0;
}

// size方法
function size() {
    return this.count;
}

// 哈希表扩容
function resize(newLimit) {
    // 保存旧的数组内容
    var oldStorage = this.storage;
    // 重置属性
    this.limit = newLimit;
    this.count = 0;
    this.storage = [];
    // 由于表大小发生变化，哈希值要重新计算
    // 遍历旧数组中的所有数据项, 并且重新插入到哈希表中
    oldStorage.forEach(function (bucket) {
        // bucket为null, 说明这里面没有数据
        if (bucket == null) {
            return;
        }
        // bucket中有数据, 那么将里面的数据重新哈希化插入
        for (var i = 0; i < bucket.length; i++) {
            var tuple = bucket[i]
            this.put(tuple[0], tuple[1])
        }
    }).bind(this);
}




