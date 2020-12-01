
// 真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例：

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
function threeSum(arr) {
    let res = [];
    let len = arr.length;
    arr = arr.sort((a, b) => a - b);
    for(let i = 0; i < len - 2; i++) {
        let j = i+1, k = len - 1;
        // 如果遇到重复的数字，则跳过
         if(arr[i]== arr[i-1]) {
            continue
        }
        while(j < k) {
            if(arr[i] + arr[j] + arr[k] > 0) {
                k--;
                while(j < k && arr[k] == arr[k-1]) {
                    k--;
                }
            } else if(arr[i] + arr[j] + arr[k] < 0) {
                j++;
                while(j < k && arr[j] == arr[j+1]) {
                    j++;
                }
            } else {
                res.push([arr[i], arr[j], arr[k]]);
                
                k--;
                j++;

                while(j < k && arr[k] == arr[k-1]) {
                    k--;
                }

                while(j < k && arr[j] == arr[j+1]) {
                    j++;
                }
            }
        }
    }

    return res;
}


const arr =  [-1, 0, 1, 2, -1, -4];
console.log("sum = ", threeSum(arr));

//简单解法：三层循环，时间复杂度O(n^3)
//高效解法：（1） 求和 转换为 求差
// （2）双指针法用在涉及求和、比大小类的数组题目里时，大前提往往是：该数组必须有序
// （3）先排序
// （3）对撞指针