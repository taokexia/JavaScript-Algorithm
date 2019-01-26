// 测试 Manacher算法
var manacher = require('./Manacher algorithm');

var s1 = "aabcacbaacdefgkkgfedcaasdbscs";
console.log(manacher(s1));

// 测试LevenShtein Distance算法
console.log("=============================测试LevenShtein Distance算法====================================");
var ld = require('./Levenshtein Distance');
res = ld('abc', 'adc');
var graph = res[1];
console.log(res[0]);
// 打印出处理过程
for(var i = 0; i < graph.length; i++) {
    console.log(graph[i]);
}
