// Usage: node showLast.js

const getBeers = require('../data')

function getLastBeer() {
    // TODO: return the last beer object (use `getBeers` for the solution)
}

if (getLastBeer()?.name === "All the Leaves are Brown") {
    console.log("Success ✅");
} else {
    console.log("Not quite right");
}
