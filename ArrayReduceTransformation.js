/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val=init;
    for(var i=0;i<nums.length;i++){
        val=fu(val,nums[i]);
    }
    return val;
};
