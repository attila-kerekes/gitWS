// Usage: node showAll.js

// Feature: Show a list of all beers in a `${name} (${brewery})` format 
// in the console.

const getBeers = require('./data')

function main() {
  const beeers = getBeers()

  for (const beer of beeers) {
    console.log(`${beer.name} (${beer.brewery})`)
  }
}

main()

