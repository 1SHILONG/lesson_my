// 数组 优势是  以O(1)的时间访问到 第i个元素
const arr  = [1,2,3];
// 返回数组的
// console.log(arr.push(5), '/////');

const arr2  = ['a', 'b', 'c'];
// arr.push(4);
// console.log(arr);
// console.log( arr.push);
// arr.push()
// 如何在 arr object 上添加  push2 
Array.prototype.push2 = function(num) {
    //  arr   [1,2,3,4]
    // console.log(num, '------');
    // console.log(this);
    // 如何拿到 arr? 抽象 
    // this.push(num)
    // this -> arr, 最后一个下标是 length - 1
    // this.length 就是加入元素的位置 
    this[this.length] = num;
    return this.length;
}

console.log(arr.push2(4), '?????');
arr2.push2(5);
console.log(arr.push2(6));
// console.log(arr);