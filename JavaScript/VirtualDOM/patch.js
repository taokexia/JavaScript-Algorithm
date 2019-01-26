// 定义新旧节点差异的情况
var REPLACE = 0;
var REORDER = 1;
var PROPS = 2;
var TEXT = 3;

function patch(node, patches) {
    var walker = {index: 0};
    dfsWalk(node, walker, patches);
}

// 深度遍历DOM树节点
function dfsWalk(node, walker, patches) {
    var currentPatches = patches[walker.index];

    var len = node.childNodes 
        ? node.childNodes.length
        : 0;
    for(var i = 0; i < len; i++) {
        var child = node.childNodes[i];
        walker.index++;
        dfsWalk(child, walker, patches);
    }

    if(currentPatches) {
        applyPatches(node, currentPatches);
    }
}

function applyPatches(node, currentPatches) {
    currentPatches.forEach((currentPatch) => {
        switch(currentPatche.type) {
            case REPLACE:
                var newNode = (typeof currentPatch.node === 'string')
                    ? document.createTextNode(currentPatch.node)
                    : currentPatch.node.render();
                break;
            case REORDER:
                reorderChildren(node, currentPatch.moves);
                break;
            case PROPS:
                setProps(node, currentPatch.props);
                break;
            case TEXT:
                if(node.textContent) {
                    node.textContent = currentPatch.content;
                } else {
                    // 兼容ie
                    node.nodeValue = currentPatch.content;
                }
                break;
            default:
                throw new Error('Unknow patch type' + currentPatch.type);
        }
    });
}

// 设置属性
function setProps(node, props) {
    for(var key in props) {
        if(props[key] === void 666) {
            node.removeAttribute(key);
        } else {
            var value = props[key];
            node.setAttribute(key, value);
        }
    }
}

// DOM重排序
function reorderChildren(node, moves) {
    var staticNodeList = [...node.childNodes];
    var maps = {};

    staticNodeList.forEach((node) => {
        if(node.nodeType === 1) {
            var key = node.getAttribute('key');
            if(key) {
                maps[key] = node;
            }
        }
    });

    moves.forEach((move) => {
        var index = move.index;
        if(move.type === 0) {
            // 移除标签
            if(staticNodeList[index] === node.childNodes[index]) {
                // 为了下一步插入，要删除对应位置的tags，
                node.removeChild(node.childNodes[index]);
            }
            staticNodeList.splice(index, 1);
        } else if(move.type === 1) {
            // 插入新元素
            var insertNode = maps[move.item.key]
                ? maps[move.item.key].cloneNode(true) // 重用元素
                : (typeof move.item === 'object')
                    ? move.item.render()
                    : document.createTextNode(move.item);
            staticNodeList.splice(index, 0, insertNode);
            node.insertBefore(insertNode, node.childNodes[index] || null);
        }
    });
}

patch.REPLACE = REPLACE;
patch.REORDER = REORDER;
patch.PROPS = PROPS;
patch.TEXT = TEXT;

module.exports = patch;