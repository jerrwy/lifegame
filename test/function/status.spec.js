const expect = require('expect')
const {nextCellStatus} = require('../../function')

describe('nextCellStatus function', () => {
    it('should return 1 when (1,3)', (next) => {
        expect(nextCellStatus(1,3)).toEqual(1)
        next()
    })

    it('should return 1 when (0,3)', (next) => {
        expect(nextCellStatus(0,3)).toEqual(1)
        next()
    })

    it('should return 1 when (1,2)', (next) => {
        expect(nextCellStatus(1,2)).toEqual(1)
        next()
    })

    it('should return 0 when (0,2)', (next) => {
        expect(nextCellStatus(0,2)).toEqual(0)
        next()
    })

    it('should return 0 when (0,1)', (next) => {
        expect(nextCellStatus(0,1)).toEqual(0)
        next()
    })

    it('should return 0 when (1,1)', (next) => {
        expect(nextCellStatus(1,1)).toEqual(0)
        next()
    })

    it('should return 0 when (0,4)', (next) => {
        expect(nextCellStatus(0,4)).toEqual(0)
        next()
    })

    it('should return 0 when (1,4)', (next) => {
        expect(nextCellStatus(1,4)).toEqual(0)
        next()
    })
})