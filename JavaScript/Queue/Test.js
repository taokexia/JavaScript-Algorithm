var Queue = require('./Queue');

// 使用队列实现击鼓传花
function passGame(nameList, num) {
    // 创建队列，传入所有name
    var queue = new Queue();
    for(var i = 0; i < nameList.length; i++) {
        queue.enqueue(nameList[i]);
    }
    // 寻找最后剩下的人
    while(queue.count() > 1) {
        // 将前num-1中的人, 都从队列的前端取出放在队列的后端
        for(var i = 1; i < num; i++) {
            queue.enqueue(queue.dequeue());
        }
        // 将第num个人, 从队列中移除
        queue.dequeue()
    }

    // 获取最后剩下的人
    console.log("剩下人数："+queue.count());
    var endName = queue.dequeue();
    console.log("最终留下来的人："+endName);

    // 返回该人在数组中位置
    return nameList.indexOf(endName);
}

// 验证结果
var names = ['John','Jack','Camila','Ingrid','Carl'];
var index = passGame(names, 4);
console.log("最终位置:" + index);