const a = [3, 4, 5, 8];

const reduceRight = (arr, func, initialAcc) => {
  let accumulator = initialAcc;
  for (let index = arr.length - 1; index >= 0; index--) {
    accumulator = func(accumulator, arr[index], index, arr);
  }
  return accumulator;
};

const newValue1 = a.reduceRight(
  (acc, item, index, arr) => ({
    items: [...acc.items, item],
    positions: [...acc.positions, index],
    quantity: arr.length,
  }),
  { items: [], positions: [], quantity: 0 }
);

const newValue2 = reduceRight(
  a,
  (acc, item, index, arr) => ({
    items: [...acc.items, item],
    positions: [...acc.positions, index],
    quantity: arr.length,
  }),
  { items: [], positions: [], quantity: 0 }
);

console.log(newValue1);
console.log(newValue2);
