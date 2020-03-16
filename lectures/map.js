// _each does not return anything, map returns an array

const weapons = ['candlestick', 'lead pipe', 'revolver']

const makeBroken = function (item) {
  return `broken ${item}`
}

const brokenWeapons = _.map(weapons, makeBroken)
