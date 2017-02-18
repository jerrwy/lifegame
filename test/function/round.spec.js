const expect = require('expect')
const {round} = require('../../function')


describe('round function', () => {
    it('should return 3 when [1,1][1,1] 1 1', (next) => {
        expect(round([[1,1],[1,1]],1,1)).toEqual(3) 
        next()
    })

    it('should return 2 when [0,1][1,1] 1 1', (next) => {
        expect(round([[0,1],[1,1]],1,1)).toEqual(2) 
        next()
    })

    it('should return 1 when [0,0][1,1] 1 1', (next) => {
        expect(round([[0,0],[1,1]],1,1)).toEqual(1) 
        next()
    })

    it('should return 1 when [0,0][0,1] 1 1', (next) => {
        expect(round([[0,0],[0,1]],1,1)).toEqual(0) 
        next()
    })

    it('should return 8 when [1,1,1][1,1,1][1,1,1] 1 1', (next) => {
        expect(round([[1,1,1],[1,1,1],[1,1,1]],1,1)).toEqual(8) 
        next()
    })

    it('should return 6 when [0,1,0][1,1,1][1,1,1] 1 1', (next) => {
        expect(round([[0,1,0],[1,1,1],[1,1,1]],1,1)).toEqual(6) 
        next()
    })

    it('should return 5 when [0,1,0][1,1,1][1,0,1] 1 1', (next) => {
        expect(round([[0,1,0],[1,1,1],[1,0,1]],1,1)).toEqual(5) 
        next()
    })

    it('should return 3 when [0,0,0][0,1,1][1,0,1] 1 1', (next) => {
        expect(round([[0,0,0],[0,1,1],[1,0,1]],1,1)).toEqual(3) 
        next()
    })

    it('should return 0 when [0,0,0][0,1,0][0,0,0] 1 1', (next) => {
        expect(round([[0,0,0],[0,0,0],[0,0,0]],1,1)).toEqual(0) 
        next()
    })
})