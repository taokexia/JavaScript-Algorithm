// 哈希算法
module.exports = function hashFunc(str, max) {
    // 初始化hashCode
    var hashCode = 0;

    // 用霍纳算法, 来计算hashCode的数值
    for(var i = 0; i < str.length; i++) {
        hashCode = 37 * hashCode + str.charCodeAt(i);
    }

    // 取模运算
    hashCode = hashCode % max;
    return hashCode;
}