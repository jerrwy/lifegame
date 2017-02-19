const expect = require('expect')
const {nextMap} = require('../../function')

describe('nextMap function', () => {
    it('should return [[0,0],[0,0]] when [[0,0],[0,0]] ', (next) => {
        const map = [[0,0],[0,0]]
        expect(nextMap(map).toString()).toEqual([[0,0],[0,0]].toString())
        next()
    })

    it('should return [[0,0],[0,0]] when [[1,0],[0,0]] ', (next) => {
        const map = [[1,0],[0,0]]
        expect(nextMap(map).toString()).toEqual([[0,0],[0,0]].toString())
        next()
    })

    it('should return [[0,0],[0,0]] when [[1,1],[0,0]] ', (next) => {
        const map = [[1,1],[0,0]]
        expect(nextMap(map).toString()).toEqual([[0,0],[0,0]].toString())
        next()
    })

    it('should return [[1,1],[1,1]] when [[1,1],[1,0]] ', (next) => {
        const map = [[1,1],[1,0]]
        expect(nextMap(map).toString()).toEqual([[1,1],[1,1]].toString())
        next()
    })

    it('should return [[1,1],[1,1]] when [[1,1],[1,1]] ', (next) => {
        const map = [[1,1],[1,1]]
        expect(nextMap(map).toString()).toEqual([[1,1],[1,1]].toString())
        next()
    })

    it('should return [[1,0,1],[0,0,0],[1,0,1]] when [[1,1,1],[1,1,1],[1,1,1]]', (next) => {
        const map = [[1,1,1],[1,1,1],[1,1,1]]
        expect(nextMap(map).toString()).toEqual([[1,0,1],[0,0,0],[1,0,1]].toString())
        next()
    })
})