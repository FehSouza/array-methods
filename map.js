const arr = [
  { name: "raul", age: 25 },
  { name: "fernanda", age: 25 },
];

const map = (arr, func) => {
  const arrTemp = [];
  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];
    const newItem = func(item, index, arr);
    arrTemp.push(newItem);
  }
  return arrTemp;
};

const newArray1 = map(arr, (item, index, old) => {
  return { nascimento: 2022 - item.age, position: index, ...old[index] };
});

const newArray2 = map(arr, (item) => {
  return { nascimento: 2022 - item.age };
});

console.log(newArray1);
console.log(newArray2);
