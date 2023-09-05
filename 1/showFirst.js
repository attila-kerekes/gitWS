// Usage: node showFirst.js

const getBeers = require('../data')

function getFirstBeer() {
 return getBeers()[0];
}

if (getFirstBeer()?.name === "Rivet red") {
    console.log("Success ✅");
} else {
    console.log("Not quite right");
}