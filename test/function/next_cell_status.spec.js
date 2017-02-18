const expect = require('expect')
const {next_cell_status} = require('../../function')

describe('next_cell_status', () => {
    it('should return true when (true,3)', (next) => {
        expect(next_cell_status(true,3)).toEqual(true)
        next()
    })

    it('should return true when (false,3)', (next) => {
        expect(next_cell_status(false,3)).toEqual(true)
        next()
    })

    it('should return true when (true,2)', (next) => {
        expect(next_cell_status(true,2)).toEqual(true)
        next()
    })

    it('should return false when (false,2)', (next) => {
        expect(next_cell_status(false,2)).toEqual(false)
        next()
    })

    it('should return false when (false,1)', (next) => {
        expect(next_cell_status(false,1)).toEqual(false)
        next()
    })

    it('should return false when (true,1)', (next) => {
        expect(next_cell_status(true,1)).toEqual(false)
        next()
    })

    it('should return false when (false,4)', (next) => {
        expect(next_cell_status(false,4)).toEqual(false)
        next()
    })

    it('should return false when (true,4)', (next) => {
        expect(next_cell_status(true,4)).toEqual(false)
        next()
    })
})