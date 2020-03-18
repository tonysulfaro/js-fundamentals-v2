// Loop through all the properties of the suspect objects in the suspects array, mark them if you think they are guilty

const game = {
  suspects: [
    {
      name: 'Rusty',
      color: 'orange'
    },
    {
      name: 'Miss Scarlet',
      color: 'red'
    }
  ]
}

game.suspects.forEach(suspect => {
  console.log(suspect)
  if (suspect.name === 'rusty') {
    suspect.guilty = true
  }
})

console.log(game.suspects)
