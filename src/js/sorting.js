export default function orderByProps(obj, order) {
  const array = [];
  const sortedArray = [];
  for (const key in obj) {
    if (order.includes(key)) {
      array.push({ key, value: obj[key] });
    } else {
      sortedArray.push({ key, value: obj[key] });
    }
  }
  array.sort((a, b) => order.indexOf(a.key) - order.indexOf(b.key));
  sortedArray.sort((a, b) => (a.key > b.key ? 1 : -1));
  return [...array, ...sortedArray];
}
