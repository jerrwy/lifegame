const {nextMap,initMap} = require('../index')

const map = initMap(3,3)
const newmap = nextMap(map)
console.log(map,newmap)