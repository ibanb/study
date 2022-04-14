// анаграмма 2

const anagram = (data) => {

  return data.map(item => item.split('').sort().join(''))
  .filter(item => item !== data[0]).length === 0
}

