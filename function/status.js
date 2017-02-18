module.exports = {
    /**
     * @desc 返回一个细胞下一时间的状态
     * @param status 细胞当前状态 false:死 true:活
     * @param count 细胞当前周围的存活细胞数量
     */
    next_cell_status: (status,count) =>{
        if(count == 3) return true
        if(count == 2) return status
        return false
    }
}