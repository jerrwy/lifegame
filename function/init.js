module.exports = {
    /**
     * @desc 随机生成w*h的细胞空间
     */
    initMap: (w,h) =>{
        let map = []
        for(let i = 0; i < h; i++){
            map[i] = new Array(w)
            for(let j = 0; j < w; j++){
                map[i][j] = Math.round(Math.random())
            }
        }

        return map
    }
}