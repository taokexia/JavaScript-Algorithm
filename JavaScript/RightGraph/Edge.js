/*
 * 边
 */
module.exports = class Edge {
    constructor(a, b, weight) {
        this.a = a; // 边的两个端点
        this.b = b; 
        this.weight = weight; // 边的权值
    }
    // 返回第一个顶点
    v() {
        return this.a;
    }
    // 返回第二个顶点
    w() {
        return this.b;
    }
    // 返回权值
    wt() {
        return this.weight;
    }
    // 给定一个顶点，返回另一个顶点
    other(x) {
        if(x !== this.a && x !== this.b) return;
        return x === this.a? this.b: this.a;
    }
    // 输出边的信息
    toString() {
        let str = ""+this.a+"-"+this.b+":"+this.weight;
        return str;
    }
}