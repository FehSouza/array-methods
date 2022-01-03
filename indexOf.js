const a = [3, 4, 5, 8];
const b = "fernanda";

const indexOf = (arr, value) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] === value) return index;
  }
  return -1;
};

const newValue1 = indexOf(a, 10);
const newValue2 = a.indexOf(10);
const newValue3 = indexOf(a, 8);
const newValue4 = a.indexOf(8);
const newValue5 = indexOf(b, "l");
const newValue6 = b.indexOf("l");
const newValue7 = indexOf(b, "a");
const newValue8 = b.indexOf("a");

console.log(newValue1, newValue2);
console.log(newValue3, newValue4);
console.log(newValue5, newValue6);
console.log(newValue7, newValue8);
