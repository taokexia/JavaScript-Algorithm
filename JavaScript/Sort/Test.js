var BubbleSort = require('./BubbleSort');
var InsertSort = require('./InsertSort');
var SelectSort = require('./SelectSort');
var HeapSort = require('./HeapSort');
var QuickSort = require('./QuickSort');

function generateRandomAray(maxSize, maxValue) {
    var n = parseInt((maxSize+1)*Math.random());
    var res = new Array();
    for(var i = 0; i < n; i++) {
        res[i] = parseInt((maxValue+1)*Math.random());
    }
    return res;
}

function isEqual(arr1, arr2) {
    if((arr1 === null && arr2 !== null) || (arr1 !== null && arr2 === null)) {
        return false;
    }
    if(arr1 === null && arr2 === null) {
        return true;
    }
    if(arr1.length !== arr2.length) {
        return false;
    }
    for(var i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}

function printArray(nums) {
    if(nums === null) return;
    var s = "";
    for(var i = 0; i < nums.length; i++) {
        s += nums[i]+ " ";
    }
    console.log(s);
}

function comparator(nums) {
    nums.sort((a, b) => a - b);
}
// 测试

var testTime = 100;
var maxSize = 100;
var maxValue = 100;
var succeed = true;
for(var i = 0; i < testTime; i++) {
    var arr1 = generateRandomAray(maxSize, maxValue);
    var arr2 = [...arr1];
    // BubbleSort(arr1);
    // InsertSort(arr1);
    // SelectSort(arr1);
    // HeapSort(arr1);
    QuickSort(arr1);
    comparator(arr2);
    if(!isEqual(arr1, arr2)) {
        succeed = false;
        break;
    }
}
console.log(succeed ? "Nice!" : "Fucking fucked!");
