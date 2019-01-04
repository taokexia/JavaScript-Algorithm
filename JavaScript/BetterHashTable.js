/*
 * 优化散列表
 */
function betterHashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.betterHash = betterHash;
    this.showDistro = showDistro;
    this.put = put;
    this.get = get;
}

// 获取散列值
// 设置hash值的方式过于，可能不同数据获得相同的hash值造成碰撞
function simpleHash(data) {
    var total= 0;
    for(var i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

function betterHash(string) {
    const H = 37; // 可用31
    var total = 0;
    for (var i = 0; i < string.length; i++) {
        total += H * total + string.charCodeAt(i);
    }
    total = total % this.table.length;
    if(total < 0) {
        total += this.table.ength-1;
    }
    return parseInt(total);
}

// 插入数据
function put(data) {
    var pos = this.betterHash(data);
    this.table[pos] = data;
}

// 显示数据
function showDistro() {
    var n = 0;
    for(var i = 0; i < this.table.length; i++) {
        if(this.table[i] != undefined) {
            print(i + ":" + this.table[i]);
        }
    }
}

// 获取数据
function get(key) {
    return this.talbe[this.betterHash(key)];
}