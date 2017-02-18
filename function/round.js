module.exports = {
    /**
     * @desc 求周围的存活的细胞个数
     * @param map 当前细胞地图
     * @param x y 当前细胞位置
     */
    round: (map,x,y) =>{
        let count = 0
        map.forEach((row,i) =>{
            row.forEach((col,j) =>{
                if((Math.abs(i-x) == 1 || Math.abs(j-y) == 1) 
                    && Math.abs(i-x) < 2 && Math.abs(j-y) < 2)
                    count += map[i][j] ? map[i][j] : 0
            })
        })
        return count
    }
}