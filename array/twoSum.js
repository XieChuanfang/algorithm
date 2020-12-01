

// 真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:
// 给定 nums = [2, 7, 11, 15], target = 9
// 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
function twoSum(nums, target) {
    let len = nums.length, map = {};
    for(let i = 0; i < len; i++) {
        let targetNum = target - nums[i];
        if(map[targetNum] !== undefined) {
            return [map[targetNum], i];
        } 

        map[nums[i]] = i;
    }
}

let nums = [2, 7, 11, 15], target = 9;
console.log("sum = ", twoSum(nums, target));


//简单思想：两层循环，时间复杂度O(n^2)
//进阶过程：（1）空间换时间； （2）几乎所有的求和问题，都可以转化为求差问题