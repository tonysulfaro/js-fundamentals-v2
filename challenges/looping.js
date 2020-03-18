// create data stricture and loop through nested array

// nesting
const obj = {
  characters: []
}

obj.characters.push({ name: 'mustard', murderer: true })
obj.characters.push({ name: 'peacock', murderer: false })

// callback function call
obj.characters.forEach(function(element) {
  console.log(element)
})

// arrow function method
obj.characters.forEach(element => {
  console.log(element)
})
