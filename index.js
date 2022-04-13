
// Плоский массив (flatten)

const flatten = (arr) => {

  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      // ключевая строчка, здесь происходит рекурсия
      const flat = flatten(arr[i]);
      for (let j = 0; j < flat.length; j++) {
        result.push(flat[j]);
      }
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(flatten([1, 2, 3, [1, 2], [1, [1]]]));
