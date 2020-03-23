// allows you to break up number of arguments passed by number of args
// waits until it gets all of the arguments and then returns, still returns a function everytime though until the condition of number of args is met
_.curry(func, [(arity = func.length)])

var abc = function(a, b, c) {
  return [a, b, c]
}

var curried = _.curry(abc)

curried(1)(2)(3)
// => [1, 2, 3]

curried(1, 2)(3)
// => [1, 2, 3]
