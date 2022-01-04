const a = [3, 4, 5, 8];

const findIndex = (arr, func) => {
  for (let index = 0; index < arr.length; index++) {
    if (func(arr[index], index, arr)) return index;
  }
  return -1;
};

const newValue1 = a.findIndex((item) => item > 4);

const newValue2 = findIndex(a, (item) => item > 4);

const newValue3 = a.findIndex((item) => item > 10);

const newValue4 = findIndex(a, (item) => item > 10);

console.log(newValue1, newValue2);
console.log(newValue3, newValue4);
