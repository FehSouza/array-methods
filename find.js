const a = [3, 4, 5, 8];

const find = (arr, func) => {
  for (let index = 0; index < arr.length; index++) {
    if (func(arr[index], index, arr)) return arr[index];
  }
};

const newValue1 = a.find((item) => {
  return item > 4;
});

const newValue2 = find(a, (item) => {
  return item > 4;
});

const newValue3 = a.find((_, index) => {
  return index === 3;
});

const newValue4 = find(a, (_, index) => {
  return index === 3;
});

console.log(newValue1, newValue2);
console.log(newValue3, newValue4);
