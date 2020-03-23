const createTuple = (a, b, c, d) => {
  console.log(arguments) // wont work because its an arrow function
  return [
    [a, c],
    [b, d]
  ]
}

createTuple('It', 'be', 'could', 'anyone', 'no one')

// without arrow function
const createTuple = function(a, b, c, ...d) {
  console.log(arguments)
  //['It', 'be', 'could', 'anyone', 'no one']
  return [
    [a, c],
    [b, d]
  ]
}

createTuple('It', 'be', 'could', 'anyone', 'no one')
