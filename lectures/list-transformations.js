// take list or collection of data in an arrangement and extract data from it

// nesting
const obj = {
  characters: []
}

obj.characters.push({ name: 'mustard', murderer: true })
obj.characters.push({ name: 'peacock', murderer: false })

console.log(obj)
console.log(obj.characters)
