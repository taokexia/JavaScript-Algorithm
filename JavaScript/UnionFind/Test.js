// 设置测试数量
var n = 100000;
// 测试并查集
console.log("=======================测试并查集I============================");
// 虽然isConnected只需要O(1)的时间，但由于union操作需要O(n)时间
// 测试总体复杂度O(n^2);
var UF = require('./UnionFindI');
var uf = new UF(n);
console.time('UnionFindI');
for(let i = 0; i < n; i++) {
    let a = Math.floor(Math.random()*n);
    let b = Math.floor(Math.random()*n);
    uf.unionElements(a, b);
}
for(let i = 0; i < n; i++) {
    let a = Math.floor(Math.random()*n);
    let b = Math.floor(Math.random()*n);
    uf.isConnected(a, b);
}
console.timeEnd('UnionFindI');
// console.log(uf.data);

// 测试并查集
console.log("=======================测试并查集II============================");
// 时间性能是O(n*h)的，h为并查集表达的树的最大高度
// 这里严格讲，h和logn没有关系
var UF = require('./UnionFindII');
var uf = new UF(n);
console.time('UnionFindII');
for(let i = 0; i < n; i++) {
    let a = Math.floor(Math.random()*n);
    let b = Math.floor(Math.random()*n);
    uf.unionElements(a, b);
}
for(let i = 0; i < n; i++) {
    let a = Math.floor(Math.random()*n);
    let b = Math.floor(Math.random()*n);
    uf.isConnected(a, b);
}
console.timeEnd('UnionFindII');
// console.log(uf.parent);

// 测试并查集
console.log("=======================测试并查集III============================");
// 时间性能是O(n*h)的，h为并查集表达的树的最大高度
// 但由于能更高概率保证树的平衡，性能更优
var UF = require('./UnionFindIII');
var uf = new UF(n);
console.time('UnionFindIII');
for(let i = 0; i < n; i++) {
    let a = Math.floor(Math.random()*n);
    let b = Math.floor(Math.random()*n);
    uf.unionElements(a, b);
}
for(let i = 0; i < n; i++) {
    let a = Math.floor(Math.random()*n);
    let b = Math.floor(Math.random()*n);
    uf.isConnected(a, b);
}
console.timeEnd('UnionFindIII');
// console.log(uf.parent);

// 测试并查集
console.log("=======================测试并查集IV============================");
// 时间性能是O(n*h)的，h为并查集表达的树的最大高度
// 相对III进行了优化，但优化地方出现情况较少，所以性能更优表现不明显，
// 甚至在一些数据下性能会更差
var UF = require('./UnionFindIV');
var uf = new UF(n);
console.time('UnionFindIV');
for(let i = 0; i < n; i++) {
    let a = Math.floor(Math.random()*n);
    let b = Math.floor(Math.random()*n);
    uf.unionElements(a, b);
}
for(let i = 0; i < n; i++) {
    let a = Math.floor(Math.random()*n);
    let b = Math.floor(Math.random()*n);
    uf.isConnected(a, b);
}
console.timeEnd('UnionFindIV');
// console.log(uf.parent);

// 测试并查集
console.log("=======================测试并查集V============================");
// 时间性能是O(n*h)的，h为并查集表达的树的最大高度
// 相对III进行了优化，但优化地方出现情况较少，所以性能更优表现不明显，
// 甚至在一些数据下性能会更差
var UF = require('./UnionFindV');
var uf = new UF(n);
console.time('UnionFindV');
for(let i = 0; i < n; i++) {
    let a = Math.floor(Math.random()*n);
    let b = Math.floor(Math.random()*n);
    uf.unionElements(a, b);
}
for(let i = 0; i < n; i++) {
    let a = Math.floor(Math.random()*n);
    let b = Math.floor(Math.random()*n);
    uf.isConnected(a, b);
}
console.timeEnd('UnionFindV');
// console.log(uf.parent);