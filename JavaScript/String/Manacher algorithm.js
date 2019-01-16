// manacher算法
module.exports = function manacher(str) {
    var newStr = init(str); // 转化字符串
    var maxLen = -1; // 最长回文长度
    var p = []; // 记录最长回文半径
    // 用于回文边界判断
    var id;
    var mx = 0;
    // 索引从1开始，因为字符0为边界符号$
    for(var i = 1; i < newStr.length; i++) {
        if(i < mx) {
            // i 小于最大回文的右边界
            // 2*id-i 是回文中心id右边i其对应在回文左边的索引： (j+mx) / 2 = id; j = 2*id - i;
            // 而p[j]表示以 j 为中心的最长回文半径;
            // mx-i 为i到当前回文最大右边界的距离 
            // 当mx-i 小于p[j]的时候，表示p[j]的最大回文半径并不是全都包括在目前id的最大回文半径p[id]中
            // 所以p[i]只能取mx-i;
            p[i] = Math.min(p[2*id - i], mx-i);
        } else {
            p[i] = 1;
        }
        // i-p[i] 当前节点的减去已经知道的回文最长回文的半径，为左边
        // i+p[i] 当前节点的加上已经知道的回文最长回文的半径，为右边
        while(newStr[i-p[i]] == newStr[i+p[i]]) {
            // 不需边界判断，因为左有'$',右有'\n'
            // 判断当前i的回文长度
            p[i]++;
        }
        // 我们每走一步 i，都要和 mx 比较，我们希望 mx 尽可能的远
        // 这样才能更有机会执行 if (i < mx)这句代码，从而提高效率
        if(mx < i+p[i]) {
            // 更新最大回文的id和mx
            id = i;
            mx = i + p[i];
        }
        // p[i] - 1为对应字符串的回文数
        maxLen = Math.max(maxLen, p[i] - 1);
    }
    return maxLen;

}

function init(str) {
    var len = str.length;
    var resStr = "$"; // 用于防止越界
    resStr += '#';
    for(var i = 0; i < len; i++) {
        resStr += str[i];
        resStr += '#';
    }
    return resStr;
}


