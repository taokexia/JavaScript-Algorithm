// 虚拟DOM算法
function Element(tagName, props, children) {
    if(!(this instanceof Element)) {
        if(!(children instanceof Array) && children !== null) {
            children = arguments.slice(2).filter(value => Boolean(value));
        }
        return new Element(tagName, props, children);
    }
    // 如果传入的第二个参数是数组，说明传入的是子标签所在的数组,没有传入该标签的props属性
    if(props instanceof Array) {
        children = props;
        props = {};
    }

    this.tagName = tagName;
    this.props = props || {};
    this.children = children || [];
    // 判断是否设置key
    this.key = props ? props.key : void 666; // void 666 等于 undefined

    var count = 0;

    // 更新父标签的count，通过遍历子标签的count计算出父标签的count
    children.forEach((child, i) => {
        if(child instanceof Element) {
            count += child.count;
        } else { // 子标签是文本
            children[i] = '' + child
        }
        count++;
    });
    // 结果赋值给父标签的count
    this.count = count;
}

// 根据tagName创建一个真正的DOM节点
Element.prototype.render = function() {
    var el = document.createElement(this.tagName); // 根据tagName构建
    var props = this.props;

    for(var propName in props) {
        var propValue = props[propName];
        el.setAttribute(propName, propValue);
    }

    var children = this.children || [];

    children.forEach(function(child) {
        var childEl = (child instanceof Element) 
            ? child.render() // 如果子节点也是虚拟DOM，递归构建DOM节点
            : document.createTextNode(child); // 如果字符串，只构建文本节点
        el.appendChild(childEl);
    });
    return el;
}

module.exports = Element;