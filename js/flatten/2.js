var arr = [1,[2,[3,4]],5];

function flatten(arr) {
  return arr.toString().split(',').map( i => +i)
}

console.log(flatten(arr));