const a = [3, 4, 5, 8];

const reduce = (arr, func, initialAccumulator) => {
  let accumulator = initialAccumulator;
  for (let index = 0; index < arr.length; index++) {
    accumulator = func(accumulator, arr[index], index, arr);
  }
  return accumulator;
};

const newValue1 = reduce(
  a,
  (acc, item) => {
    return acc + item;
  },
  0
);

const newValue2 = a.reduce((acc, item) => {
  return acc + item;
}, 0);

console.log(newValue1, newValue2);
