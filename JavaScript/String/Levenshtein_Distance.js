// 莱文斯坦距离
// 莱文斯坦距离，又称Levenshtein距离，是编辑距离的一种。
// 指两个字串之间，由一个转成另一个所需的最少编辑操作次数。
// 允许的编辑操作包括将一个字符替换成另一个字符，插入一个字符，删除一个字符。

// 动态规划经常被用来作为这个问题的解决手段之一。
module.exports = function LevenShteinDistance(str1, str2) {
    let len1 = str1.length;
    let len2 = str2.length;
    let t = [];
    for(let i = 0; i <= len1; i++) {
        t.push([i]);
    }
    for(let i = 0; i < len2; i++) {
        t[0][i+1] = i+1;
    }
    let cost;
    for(let i = 1; i <= len1; i++) {
        for(let j = 1; j <= len2; j++) {
            if(str1[i-1] === str2[j-1])
                cost = 0;
            else
                cost = 1;
            t[i][j] = min(
                t[i-1][j]+1,        // 删除
                t[i][j-1]+1,        // 插入
                t[i-1][j-1] + cost  // 替换
            )
        }
    }
    return [t[len1-1][len2-1], t];
}

function min(...args) {
    return args.reduce((a, b) => {
       return a > b ? b : a;
    })
    
}