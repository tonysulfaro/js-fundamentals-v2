const person = []
person.name = 'mustard'
person[0] = 'was not in billiards room'

console.log(typeof (person))
console.log(person)
// console.log(person.0) // cant do this
console.log(person[0]) // can do this tho

const plea = 'wouldshe'
person[plea] = 'would never do that smh'
console.log(person)
