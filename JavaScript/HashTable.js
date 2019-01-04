/*
 * 定义散列表
 */
function HashTable() {
    this.table = new Array(137);
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
}

// 获取散列值
// 设置hash值的方式过于，可能不同数据获得相同的hash值造成碰撞
function simpleHash(data) {
    var total= 0;
    for(var i = 0; i < data.length; i++) {
        total += data.charCodeAt(i);
    }
    print("Hash Vlaue:" + data + " -> " + total);
    return total % this.table.length;
}


// 插入数据
function put(data) {
    var pos = this.simpleHash(data);
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




