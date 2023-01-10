let arr1 = [{name:"1"},2,3,4];
// let arr2 = arr1;
let arr2 = arr1.slice(0);
console.log(arr2);
arr2[0].name = "2";
console.log(arr1);
let arr3 = arr1.concat()
console.log(arr3);