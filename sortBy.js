// Usage: node sortBy.js <score|abv>
// Example: node sortBy.js score

// Feature 1: sort by abv (do it on different branch than Feature 2)
//  Print a list of beer with the following format
//  `${name} (score: ${score}, abv: ${abv})`
//  If the given param is "abv" sort the beers in ascending
//  order of their abv value.

// Feature 2: sort by score (do it on different branch than Feature 1)
//  Print a list of beer with the following format
//  `${name} (score: ${score}, abv: ${abv})`
//  If the given param is "score" sort the beers in ascending
//  order of their score value.

const getBeers = require('./data')

function main(property) {
    console.log('property:', property)

    const beers = [...getBeers()]
    beers.sort((a, b) => a.score > b.score ? 1 : -1)

    for (const beer of beers) {
        console.log(`${beer.name} ${beer.score}`)
    }
}

main(process.argv[2])

