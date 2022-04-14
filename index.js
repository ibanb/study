
// Подмножество массива

const contains = (where, what) => {

  let result = true

  what.map(item => {
    if (!where.includes(item)) {
      result = false
    }
  })

  return result
}

console.log(contains([1, 2, 3, 4], [1, 2, 5]))


