const Stack = require('./Stack');

// 定义将10进制的数转换为2进制
function dec2bin(decNumber) {
    var stack = new Stack();
    var remainder;

    // 循环除法
    while(decNumber > 0) {
        remainder = decNumber % 2;
        decNumber = Math.floor(decNumber / 2);
        stack.push(remainder);
    }
    // 取出数据
    var binStr = "";
    while(!stack.isEmpty()) {
        binStr += stack.pop();
    }
    console.log(binStr);
    return binStr;
}

// 测试函数
console.log(dec2bin(10));