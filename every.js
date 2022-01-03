const a = [3, 4, 5, 8];

// const every = (arr, func) => {
//   let acc = 0;
//   for (let index = 0; index < arr.length; index++) {
//     if (func(arr[index], index, arr)) acc++;
//   }
//   if (acc === arr.length) return true;
//   return false;
// };

const every = (arr, func) => {
  for (let index = 0; index < arr.length; index++) {
    if (!func(arr[index], index, arr)) return false;
  }
  return true;
};

const newValue1 = every(a, (item) => {
  return item > 10;
});

const newValue2 = a.every((item) => {
  return item > 10;
});

console.log(newValue1, newValue2);
