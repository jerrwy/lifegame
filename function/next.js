const {round} = require('./round')
const {nextCellStatus} = require('./status')

module.exports = {
    /**
     * @desc 生成下一时刻的地图
     * @param 当前时刻的map
     * @return 下一时刻的map
     */
    nextMap: (map) =>{
        let newmap = map.map(row => row.map(col => 0))
        map.map((row,i) =>{
            row.map((col,j) =>{
                const count = round(map,i,j)
                newmap[i][j] = nextCellStatus(map[i][j],count)
            })
        })
        return newmap
    }
}