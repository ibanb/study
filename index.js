// анаграмма

const anagram = (data) => {

  const frame = data[0].split('')
  let buffer = [...frame]
  let result = true

  data.slice(1).map(item => {
    if (buffer.length !== item.length) {
      result = false
    }

    for (let i = 0; i < item.length; i++) {
      if (buffer.includes(item[i])) {
        const index = buffer.indexOf(item[i])
        buffer.splice(index, 1)
      }
    }
    if (buffer.length !== 0) {
      result = false
    }
    buffer = [...frame]
  })
  return result
}

console.log(anagram(['abcde', 'acdb', 'adbc']))

