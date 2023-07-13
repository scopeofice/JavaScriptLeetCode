/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var nums=[];
    var temp=0;
    for(var i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            nums[temp++]=arr[i];
        }
    }
    return nums;
};
