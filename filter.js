const arr = [
  { name: "raul", age: 25 },
  { name: "fernanda", age: 25 },
  { name: "raul", age: 25 },
  { name: "fernanda", age: 25 },
  { name: "raul", age: 25 },
  { name: "fernanda", age: 25 },
];

const filter = (arr, func) => {
  const arrTemp = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i], i, arr)) arrTemp.push(arr[i]);
  }
  return arrTemp;
};

const newArray1 = filter(arr, (item) => {
  if (item.name === "fernanda") return true;
});

const a = [3, 6, 9, 8, 8, 74, 5, 89, 9, 1, 5];

const b = a.filter((item) => {
  if (item > 8) return true;
});

const newArray2 = filter(a, (item) => {
  if (item > 8) return true;
});

const newArray3 = filter(arr, (_, index) => {
  if (index > 2) return true;
});

console.log(newArray3);
