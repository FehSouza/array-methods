const a = [3, 4, 5, 8];

const some = (arr, func) => {
  for (let index = 0; index < arr.length; index++) {
    if (func(arr[index], index, arr)) return true;
  }
  return false;
};

const newValue1 = some(a, (item) => {
  return item > 8;
});

const newValue2 = a.some((item) => {
  return item > 8;
});

console.log(newValue1, newValue2);
