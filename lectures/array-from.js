// from takes iterables and gives them access to array methods
const constructArr = function() {
  const arr = Array.from(arguments)
  arr.push('the billiards room?')
  return arr.join(' ')
}
constructArr('was', 'it', 'in')
