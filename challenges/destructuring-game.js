// Destructure this nested data structure into two variables with the strings 'red' and 'orange'

var suspects = [
  {
    name: 'Rusty',
    color: 'orange'
  }, {
    name: 'Miss Scarlet',
    color: 'red'
  }
]

const [color1, color2] = [suspects[0].color, suspects[1].color]

const [{ color: firstColor }, { color: secondColor }] = suspects

console.log(color1, color2)
