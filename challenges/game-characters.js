// create a representation of a game using bracket and dot notation

const mustard = {
  murderer: true,
  plea: 'I would never'
}

const peacock = {
  murderer: false,
  plea: 'never would I'
}

const game = {
  characters: [],
  round: 0
}

game.characters.push(mustard)
game.characters.push(peacock)

console.log(game)
