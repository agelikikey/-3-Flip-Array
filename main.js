var arr = [45,67,87,23,5,32,60];
// console.log(arr.reverse());
//Your code here.
function reverseArray(arr) {
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}
console.log(reverseArray(arr));

