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

}

main(process.argv[2])

