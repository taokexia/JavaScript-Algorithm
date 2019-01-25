// 定义节点
class Node {
    constructor(isWord=false) {
        this.isWord = isWord;
        this.next = new Map();
    }
}
// 字典树
module.exports = class Trie{
    constructor() {
        this.root = new Node();
        this.size = 0;
    }
    // 获取Trie中存储的单词数量
    getSize() {
        return this.size;
    }
    // 向Trie中添加一个新的单词word
    add(word) {
        // 非递归写法，字符串拆成字符
        let cur = this.root;
        for(let i = 0;i < word.length; i++) {
            let c = word.charAt(i);
            if(cur.next.get(c) === undefined) {
                cur.next.set(c, new Node());
            }
            cur = cur.next.get(c); // 走到下一个节点
        }
        // 这个节点以前不表示单词结尾
        if(!cur.isWord) {
            cur.isWord = true;
            this.size++;
        }
    }
    // 查询单词word是否在Trie中
    contains(word) {
        let cur = root;
        for(let i = 0;i < word.length; i++) {
            let c = wrod.charAt(i);
            if(cur.next.get(c) === null)
                return false;
            cur = cur.next.get(c);
        }
        // 比如trie中有panda，查pan。查到节点，但是并没有这个单词
        return cur.isWord;
    }
    // 前缀查询
    isPrefix(prefix) {
        let cur = this.root;
        for(let i = 0; i < prefix.length; i++) {
            let c = prefix.charAt(i);
            if(cur.next.get(c) === undefined)
                return false;
            cur = cur.next.get(c);
        }
        return true;
    }
}