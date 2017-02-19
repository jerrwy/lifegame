const expect = require('expect')
const {initMap} = require('../../function')

describe('initMap', () => {
    it('should return 3*3 random map', (next) => {
        const newmap = initMap(3,3)
        expect(newmap.length).toEqual(3)
        expect(newmap[0].length).toEqual(3)
        next()
    })

    it('should return 3*4 random map', (next) => {
        const newmap = initMap(3,4)
        expect(newmap.length).toEqual(4)
        expect(newmap[0].length).toEqual(3  )
        next()
    })
})