var patch = require('./patch');

// diff函数，对比两棵树
function diff(oldTree, newTree) {
    var index = 0; // 当前节点的标志
    var patches = {}; // 用来记录每个节点差异的对象
    dfsWalk(oldTree, newTree, index, patches);
    return patches;
}

// 对两棵树进行深度优先遍历
function dfsWalk(oldNode, newNode, index, patches) {
    // 对比oldNode和newNode的不同，记录下来
    var currentPatch = [];

    // 如果node是被移除的
    if(newNode === null) {
        // 真实的DOM节点在节点重新排序的时候被移除，所以这里不需要进行处理
    } else if((typeof oldNode === 'string') && (typeof newNode === 'string')) {
        // 更换节点的文本
        if(newNode !== oldNode) {
            currentPatch.push({type: patch.TEXT, content: newNode})
        }
    } else if(oldNode.tagName === newNode.tagName && oldNode.key === newNode.key) {
        // 如果新节点跟旧节点相同，则比较节点的属性和子节点
        // 比较属性
        var propsPatches = diffProps(oldNode, newNode);
        if(propsPatches) {
            currentPatch.push({ type: patch.PROPS, props: propsPatches });
        }
        // 比较子节点,如果子节点有ignore这个属性，则不对这个子节点进行比较
        if(!isIgnoreChildren(newNode)) {
            diffChildren(
                oldNode.children,
                newNode.children,
                index,
                patches,
                currentPatch
            );
        }
    } else {
        // 如果新节点和旧节点的tag不一样，则直接替换节点
        currentPatch.push({ type: patch.REPLACE, node: newNode })
    }

    if(currentPatch.length) {
        patches[index] = currentPatch;
    }
}

// 遍历子节点
function diffChildren(oldChildren, newChildren, index, patches, currentPatch) {
    var leftNode = null;
    var currentNodeIndex = index;
    oldChildren.forEach(function (child, i) {
        var newChild = newChildren[i];
        currentNodeIndex = (leftNode && leftNode.count)
            ? currentNodeIndex + leftNode.count + 1
            : currentNodeIndex + 1
        dfsWalk(child, newChild, currentNodeIndex, patches) // 深度遍历子节点
    })
}