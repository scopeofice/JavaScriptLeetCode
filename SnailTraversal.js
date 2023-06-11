/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */
Array.prototype.snail = function(rowsCount, colsCount) {
    if(colsCount*rowsCount != this.length) return [];

    return this.reduce((res,item,index)=>{
        let col = index % rowsCount;
        let row = Math.floor(index/rowsCount)
        if(row%2 != 0){col = rowsCount - col - 1}
        res[col] = [...(res[col] || []),item]
        return res
    },[]);  
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
