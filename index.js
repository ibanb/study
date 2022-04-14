
// Удаление повторяющихся символов в строке

const keepUniqChars = (str) => {

  const stack = []

  str.split('').forEach(char => {
    if (!stack.includes(char)) {
      stack.push(char)
    }
  })
  console.log(stack)
}


keepUniqChars('abcdabcd')

