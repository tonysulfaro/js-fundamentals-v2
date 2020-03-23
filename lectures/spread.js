const createTuple = (a, b, c, d) => {
  return [
    [a, c],
    [b, d]
  ]
}

createTuple('It', 'be', 'could', 'anyone', 'no one')
// => ??
// returns it coult be anyone, last argument is not used

// with spread operator
const createTuple = (a, b, c, ...d) => {
  return [
    [a, c],
    [b, d]
  ]
}

createTuple('It', 'be', 'could', 'anyone', 'no one')
// => ??
// returns [['it', 'could'],['be',['anyone','no one']]]
// puts all extra arguments at the end into an array
