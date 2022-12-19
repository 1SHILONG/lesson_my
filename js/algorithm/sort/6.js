const bubbleSort = arr => {
    console.time('冒泡排序耗时')
  // 多声明变量， 可以让我们放下一些思想
  let lastExchangeIndex = 0; // 无序数列的边界
  let len = arr.length;
  let sortBorder =  len - 1;//已排好序的边界

  for (let i = 0; i < len - 1; i++) { // 
      let isSorted = true;  // 是否可以直接退出？ 
      // j 0 -> sortBorder  swap 
      for (let j = 0; j < sortBorder; j++) {
          if (arr[j] > arr[j+1]) {
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
              isSorted = false;
              lastExchangeIndex = j;
          }
      }
      sortBorder = lastExchangeIndex;
      if (isSorted) {
          break;
      }
  }
  console.timeEnd('冒泡排序耗时')
  return arr;
}

console.log(bubbleSort([1,3,4,5,8,7,2,6]))