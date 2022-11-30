//匿名函数
// js 变量或常量的类型由值决定
// 函数表达式
// 回文 对称
const reverse = function (str) {
    // let reverseStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     reverseStr += str[i]
    // }
    // return reverseStr
    return str.split('').reverse().join('')
}
console.log(reverse('hello'));
console.log(reverse('aba'));
// 函数
// function reverse() {

// }