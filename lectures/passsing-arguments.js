const ifElse = (condition, isTrue, isFalse, ...args) => {
  console.log(args) //['HI', 'BYE', 'HOLA']
  return condition ? isTrue(...args) : isFalse(...args)
  isTrue('HI', 'BYE', 'HOLA')
}
ifElse(true, fn1, fn2, 'HI', 'BYE', 'HOLA')
