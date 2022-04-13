
function uniq(str) {

  const scopeChars = {}
    String(str).split('').map((char) => {
    if (scopeChars[char]) {
      scopeChars[char] += 1
    } else {
      scopeChars[char] = 1
    }
  })

  const result = Object.values(scopeChars)
    .filter(item => item > 1)

  return result.length === 0
}


console.log(uniq(1223456));
