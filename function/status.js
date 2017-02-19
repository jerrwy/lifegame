module.exports = {
    /**
     * @desc 返回一个细胞下一时间的状态
     * @param status 细胞当前状态 0:死 1:活
     * @param count 细胞当前周围的存活细胞数量
     */
    nextCellStatus: (status,count) =>{
        if(count == 3) return 1
        if(count == 2) return status
        return 0
    }
}