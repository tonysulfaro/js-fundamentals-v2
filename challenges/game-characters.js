// create a representation of a game using bracket and dot notation

const mustard = {
  murderer: true,
  plea: 'I would never'
}

const peacock = {
  murderer: false,
  plea: 'never would I'
}

const white = {
  murderer: false,
  plea: 'how could have I done such a thing??'
}

const game = {
  characters: [],
  round: 0
}

game.characters.push(mustard)
game.characters.push(peacock)
game.characters.push(white)

console.log(game)
