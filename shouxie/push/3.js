// pop 
// 被弹出的元素的值
const arr  = [1,2,3];
Array.prototype.pop = function() {
   let tmp = this[this.length - 1];
   this.length --;
    return tmp;
   }
   console.log(arr.pop());
   console.log(arr);
